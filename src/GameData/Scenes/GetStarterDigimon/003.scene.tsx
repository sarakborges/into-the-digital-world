import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const GetStarterDigimon003 = () => {
  const { profile } = useProfile()
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.dorimon,

    content: (
      <Text as="p">
        {getDialogs('GETSTARTERDIGIMON_003_TEXT').replaceAll(
          '[NAME]',
          profile?.name
        )}
      </Text>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-003-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '004'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
