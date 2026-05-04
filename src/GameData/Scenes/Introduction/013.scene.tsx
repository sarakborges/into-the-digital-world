import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { useScene } from '@/Hooks/Scene.hook'

import { Portrait } from '@/Components/System/Portrait'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction013 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    content: (
      <>
        <Text as="p">{getDialogs('INTRODUCTION_013_TEXT')}</Text>

        <Portrait
          alt={getDialogs('INTRODUCTION_013_IMAGE')}
          src="/npcs/bootmon.webp"
        />
      </>
    ),

    options: [
      {
        id: 'scene-introduction-013-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '014'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
