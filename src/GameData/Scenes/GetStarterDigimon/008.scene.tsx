import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { useScene } from '@/Hooks/Scene.hook'

import { Dialog } from '@/Components/App/Dialog'

export const GetStarterDigimon008 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: 'player',

    content: <Text as="p">{getDialogs(`GETSTARTERDIGIMON_008_TEXT`)}</Text>,

    options: [
      {
        id: 'scene-getstarterdigimon-008-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '009'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
