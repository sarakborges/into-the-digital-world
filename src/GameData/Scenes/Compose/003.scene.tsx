import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllResearches } from '@/GameData/Researches'

import { getTranslation } from '@/Helpers/Language'
import { saveSession } from '@/Helpers/Systems/Data'

import { useCompositionStore } from '@/Stores/Composition.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { AppCompose } from '@/Components/Digivice/Apps/AppCompose/App'

export const Compose003 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile } = useProfileStore((state) => state)
  const { composition, setComposition } = useCompositionStore((state) => state)

  if (!profile || !composition) {
    return
  }

  const requiredItems = composition
    ? AllResearches[composition.baseDigimon.id].requiredItems || {}
    : {}
  const optionalItems = composition ? composition.optionalItems || {} : {}

  const playerHasEnoughItems = Object.keys(composition.totalItems ?? {}).some(
    (item) =>
      (profile.items[item] || 0) >= (composition.totalItems?.[item] || 0)
  )

  const composeDigimon = () => {
    const newDigimonId =
      Number(
        Object.keys(profile.partnerDigimons).sort((a, b) => (a > b ? -1 : 1))[0]
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

    for (const item of Object.keys(requiredItems)) {
      updatedProfile.items[item] -= requiredItems[item] || 0
    }

    for (const item of Object.keys(optionalItems)) {
      updatedProfile.items[item] -= optionalItems[item] || 0
    }

    setComposition(null)
    saveSession(updatedProfile)
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.jijimon,

    content: <AppCompose />,

    options: [
      {
        id: 'scene-compose-002-back',
        text: getTranslation('SCENES_BACK_BUTTON'),
        action: () => {
          setComposition(null)
          setScene({
            currentScene: 'compose',
            currentStage: '002'
          })
        }
      },

      {
        id: 'scene-compose-002-confirm',
        text: getTranslation('SCENES_CONFIRM_BUTTON'),
        action: () => {
          composeDigimon()
          setScene(null)
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
