import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useScene } from '@/Hooks/Scene.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction027 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: 'player',

    content: <Text as="p">{getDialogs('INTRODUCTION_027_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-027-confirm',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '028'
          })
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
