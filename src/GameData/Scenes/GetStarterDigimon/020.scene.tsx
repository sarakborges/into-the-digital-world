import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfileStore } from '@/Stores/Profile.store'

import { Dialog } from '@/Components/App/Dialog'

export const GetStarterDigimon020 = () => {
  const { setScene } = useScene()
  const profile = useProfileStore((state) => state.profile)

  const dialogOptions: DialogType = {
    speaker: { ...profile!, isPlayer: true },

    content: <Text as="p">{getDialogs(`GETSTARTERDIGIMON_020_TEXT`)}</Text>,

    options: [
      {
        id: 'scene-getstarterdigimon-020-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '021'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
