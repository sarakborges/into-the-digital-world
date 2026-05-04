import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction009 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    content: (
      <>
        <Text as="p">{getDialogs('INTRODUCTION_009_TEXT')}</Text>

        <Portrait
          alt={getDialogs('INTRODUCTION_009_IMAGE')}
          src="/avatars/glitch.webp"
        />
      </>
    ),

    options: [
      {
        id: 'scene-introduction-009-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '010'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
