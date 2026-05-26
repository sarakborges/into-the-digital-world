import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction026 = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const dialogOptions: DialogType = {
    content: <Text as="p">{getDialogs('INTRODUCTION_026_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-026-confirm',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '027'
          })
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
