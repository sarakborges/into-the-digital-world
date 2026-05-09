import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { useProfile } from '@/Hooks/Profile.hook'

export const GetStarterDigimon003 = () => {
  const { profile } = useProfile()
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: {
      id: 'dorimon',
      name: 'Dorimon',
      portrait: 'digimon_portraits/DORIMON'
    },

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
