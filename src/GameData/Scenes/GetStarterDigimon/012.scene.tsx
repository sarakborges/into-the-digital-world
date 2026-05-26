import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { useScene } from '@/Hooks/Scene.hook'

import { Dialog } from '@/Components/App/Dialog'

export const GetStarterDigimon012 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: <Text as="p">{getDialogs(`GETSTARTERDIGIMON_012_TEXT`)}</Text>,

    options: [
      {
        id: 'scene-getstarterdigimon-012-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '013'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
