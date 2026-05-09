import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { useScene } from '@/Hooks/Scene.hook'

import { Dialog } from '@/Components/App/Dialog'

export const GetStarterDigimon007 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.gennai,

    content: <Text as="p">{getDialogs(`GETSTARTERDIGIMON_007_TEXT`)}</Text>,

    options: [
      {
        id: 'scene-getstarterdigimon-007-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '008'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
