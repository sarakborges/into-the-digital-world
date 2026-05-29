import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction002 = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const dialogOptions: DialogType = {
    content: (
      <>
        <Portrait
          alt={getDialogs('INTRODUCTION_002_IMAGE')}
          src="/npcs/gennai.webp"
        />

        <Text as="p">{getDialogs('INTRODUCTION_002_TEXT')}</Text>
      </>
    ),

    options: [
      {
        id: 'scene-introduction-002-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '003'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
