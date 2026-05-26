import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfileStore } from '@/Stores/Profile.store'

import { Dialog } from '@/Components/App/Dialog'

export const GetStarterDigimon009 = () => {
  const { setScene } = useScene()
  const profile = useProfileStore((state) => state.profile)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <Text as="p">
        {getDialogs(`GETSTARTERDIGIMON_009_TEXT`).replaceAll(
          '[NAME]',
          profile?.name
        )}
      </Text>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-009-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '010'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
