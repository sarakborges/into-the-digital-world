import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction008 = () => {
  const profile = useProfileStore((state) => state.profile)
  const setScene = useSceneStore((state) => state.setScene)

  const dialogOptions: DialogType = {
    speaker: { ...profile!, isPlayer: true },

    content: <Text as="p">{getDialogs('INTRODUCTION_008_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-008-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '009'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
