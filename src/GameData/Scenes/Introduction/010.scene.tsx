import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { useProfile } from '@/Hooks/Profile.hook'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction010 = () => {
  const { profile } = useProfile()
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: { id: 'player', name: profile!.name, portrait: `avatars/glitch` },

    content: <Text as="p">{getDialogs('INTRODUCTION_010_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-010-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '011'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
