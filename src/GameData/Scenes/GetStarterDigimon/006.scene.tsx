import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Dialog } from '@/Components/App/Dialog'

export const GetStarterDigimon006 = () => {
  const { profile } = useProfile()
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <Text as="p">
        {getDialogs(
          `GETSTARTERDIGIMON_006_TEXT_${profile?.meaningfulChoices.dorimonMeeting.toLocaleUpperCase()}`
        )}
      </Text>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-006-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '007'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
