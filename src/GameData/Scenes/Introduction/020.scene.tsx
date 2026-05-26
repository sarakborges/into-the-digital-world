import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction020 = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: <Text as="p">{getDialogs('INTRODUCTION_020_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-020-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '021'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
