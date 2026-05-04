import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { useScene } from '@/Hooks/Scene.hook'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction011 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.gennai,

    content: <Text as="p">{getDialogs('INTRODUCTION_011_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-011-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '012'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
