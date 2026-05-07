import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useScene } from '@/Hooks/Scene.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction028 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: 'player',

    content: <Text as="p">{getDialogs('INTRODUCTION_028_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-028-confirm',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '029'
          })
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
