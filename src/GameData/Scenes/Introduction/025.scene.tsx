import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useScene } from '@/Hooks/Scene.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction025 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.dressmon,

    content: <Text as="p">{getDialogs('INTRODUCTION_025_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-025-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '026'
          })
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
