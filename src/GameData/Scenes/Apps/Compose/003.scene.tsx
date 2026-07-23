import type { DialogType } from '@/Types/Dialog.type'

import { NpcJijimon } from '@/GameData/Npcs/Jijimon.npc'
import { getResearch } from '@/GameData/Registries/Research.registry'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'
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
  const requiredItems = research.requiredItems || {}
  const optionalItems = composition.optionalItems || {}

  const playerHasEnoughItems = Object.entries(
    composition.totalItems ?? {}
  ).every(([item, amount]) => (profile.items[item] ?? 0) >= amount)

  const composeDigimon = () => {
    const newDigimonId =
      Object.values(profile.partnerDigimons).reduce(
        (highestId, digimon) => Math.max(highestId, digimon.id),
        0
      ) + 1

    const updatedProfile = {
      ...profile,
      partnerDigimons: {
        ...profile.partnerDigimons,

        [newDigimonId]: {
          id: newDigimonId,
          baseDigimon: composition.baseDigimon.id,
          isStarter: true,
          equipments: {}
        }
      }
    }

    for (const [item, amount] of Object.entries(requiredItems)) {
      updatedProfile.items[item] = (updatedProfile.items[item] ?? 0) - amount
    }

    for (const [item, amount] of Object.entries(optionalItems)) {
      updatedProfile.items[item] = (updatedProfile.items[item] ?? 0) - amount
    }

    setComposition(null)
    saveSession(updatedProfile)
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
