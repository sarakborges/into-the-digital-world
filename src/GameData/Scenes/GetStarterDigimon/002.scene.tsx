import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { Portrait } from '@/Components/System/Portrait'

export const GetStarterDigimon002 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.gennai,

    content: (
      <>
        <Text as="p">{getDialogs('GETSTARTERDIGIMON_002_TEXT')}</Text>
        <Portrait
          alt={getDialogs('GETSTARTERDIGIMON_002_IMG')}
          src="/digimons/DORIMON.webp"
        />
      </>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-002-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '003'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
