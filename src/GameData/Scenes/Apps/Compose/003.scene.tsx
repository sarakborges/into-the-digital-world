import type { DialogType } from '@/Types/Dialog.type'

import { NpcJijimon } from '@/GameData/Npcs/Jijimon.npc'
import { getResearch } from '@/GameData/Registries/Research.registry'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { applyItemAmounts } from '@/Helpers/Systems/Profile/applyItemAmounts.helper'
import { hasItems } from '@/Helpers/Systems/Profile/hasItems.helper'
import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { useCompositionStore } from '@/Stores/Composition.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { AppCompose } from '@/Components/Digivice/Apps/AppCompose/App/AppCompose.component'

export const Compose003 = () => {
  const { profile } = useProfileStore((state) => state)
  const { composition, setComposition } = useCompositionStore((state) => state)
  const { goBackScene } = useSceneStore((state) => state)

  if (!profile || !composition) {
    return
  }

  const research = getResearch(composition.baseDigimon.id)
  const requiredItems = research.requiredItems ?? {}
  const optionalItems = composition.optionalItems ?? {}
  const playerHasEnoughItems = hasItems({
    inventory: profile.items,
    requiredItems: composition.totalItems
  })

  const composeDigimon = () => {
    const newDigimonId =
      Object.values(profile.partnerDigimons).reduce(
        (highestId, digimon) => Math.max(highestId, digimon.id),
        0
      ) + 1

    const itemsAfterRequired = applyItemAmounts({
      inventory: profile.items,
      items: requiredItems,
      operation: 'subtract'
    })

    setProfileSession({
      ...profile,
      items: applyItemAmounts({
        inventory: itemsAfterRequired,
        items: optionalItems,
        operation: 'subtract'
      }),
      partnerDigimons: {
        ...profile.partnerDigimons,

        [newDigimonId]: {
          id: newDigimonId,
          baseDigimon: composition.baseDigimon.id,
          isStarter: true,
          equipments: {}
        }
      }
    })

    setComposition(null)
  }

  const dialogOptions: DialogType = {
    speaker: NpcJijimon,

    content: <AppCompose />,

    options: [
      {
        id: 'scene-compose-002-back',
        text: getTexts('SCENES_BACK_BUTTON'),
        action: () => {
          setComposition(null)
          goBackScene()
        }
      },

      {
        id: 'scene-compose-002-confirm',
        text: getTexts('SCENES_CONFIRM_BUTTON'),
        action: () => {
          composeDigimon()
          closeScene()
        },

        disabled:
          !composition.baseDigimon ||
          (!!Object.keys(composition.totalItems ?? {}).length &&
            !playerHasEnoughItems) ||
          (!!Object.keys(composition.optionalItems ?? {}).length &&
            (composition.completed || 0) < 100)
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
