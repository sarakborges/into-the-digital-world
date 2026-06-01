import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { AllNpcs } from '@/GameData/Npcs'
import { AllResearches } from '@/GameData/Researches'

import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useCompositionStore } from '@/Stores/Composition.store'

import { Dialog } from '@/Components/App/Dialog'
import { CompositionsList } from '@/Components/App/CompositionsList'

export const Compose002 = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const profile = useProfileStore((state) => state.profile)
  const setProfile = useProfileStore((state) => state.setProfile)

  const composition = useCompositionStore((state) => state.composition)
  const setComposition = useCompositionStore((state) => state.setComposition)

  const requiredItems = !!composition
    ? AllResearches[composition.baseDigimon.id].requiredItems || {}
    : {}
  const optionalItems = !!composition ? composition?.optionalItems || {} : {}

  const playerHasEnoughItems = Object.keys(composition?.totalItems ?? {}).some(
    (item) =>
      (profile?.items[item] || 0) >= (composition?.totalItems?.[item] || 0)
  )

  const composeDigimon = () => {
    const newDigimonId =
      Number(
        Object.keys(profile!.partnerDigimons!).sort((a, b) =>
          a > b ? -1 : 1
        )[0]
      ) + 1

    const updatedProfile = {
      ...profile!,
      partnerDigimons: {
        ...profile!.partnerDigimons!,

        [newDigimonId]: {
          id: newDigimonId,
          baseDigimon: composition?.baseDigimon.id!,
          isStarter: true,
          bond: 0
        }
      }
    }

    for (let item of Object.keys(requiredItems)) {
      updatedProfile!.items[item] -= requiredItems[item] || 0
    }

    for (let item of Object.keys(optionalItems)) {
      updatedProfile!.items[item] -= optionalItems[item] || 0
    }

    setComposition(null)
    setProfile(updatedProfile)
    saveSession({ key: 'profile', value: updatedProfile })
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.jijimon,

    content: <CompositionsList />,

    options: [
      {
        id: 'scene-compose-002-back',
        text: getDialogs('SCENES_BACK_BUTTON'),
        action: () => {
          setComposition(null)
        }
      },

      {
        id: 'scene-compose-002-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: () => {
          composeDigimon()
          setScene(null)
        },

        disabled:
          !composition?.baseDigimon ||
          (!!Object.keys(composition?.totalItems ?? {}).length &&
            !playerHasEnoughItems) ||
          (!!Object.keys(composition?.optionalItems ?? {}).length &&
            (composition?.completed || 0) < 100)
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
