import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Dialog } from '@/Components/App/Dialog'
import { Text } from '@/Components/System/Text'

export const Introduction007 = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: <Text as="p">{getDialogs('INTRODUCTION_007_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-007-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '008'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
