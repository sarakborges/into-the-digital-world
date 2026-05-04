import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction001 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    content: <Text as="p">{getDialogs('INTRODUCTION_001_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-001-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '002'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
