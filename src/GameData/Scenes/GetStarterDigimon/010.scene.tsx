import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { useScene } from '@/Hooks/Scene.hook'

import { Dialog } from '@/Components/App/Dialog'

export const GetStarterDigimon010 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: 'player',

    content: <Text as="p">{getDialogs(`GETSTARTERDIGIMON_010_TEXT`)}</Text>,

    options: [
      {
        id: 'scene-getstarterdigimon-010-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '011'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
