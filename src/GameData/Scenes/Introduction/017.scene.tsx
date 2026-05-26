import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction017 = () => {
  const { setScene } = useScene()
  const profile = useProfileStore((state) => state.profile)

  const dialogOptions: DialogType = {
    speaker: { ...profile!, isPlayer: true },

    content: <Text as="p">{getDialogs('INTRODUCTION_017_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-017-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '018'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
