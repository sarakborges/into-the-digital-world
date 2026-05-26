import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction001 = () => {
  const setScene = useSceneStore((state) => state.setScene)

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
