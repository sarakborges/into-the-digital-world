import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/App/Dialog'

export const GetStarterDigimon016 = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const profile = useProfileStore((state) => state.profile)

  const dialogOptions: DialogType = {
    speaker: { ...profile!, isPlayer: true },

    content: <Text as="p">{getDialogs(`GETSTARTERDIGIMON_016_TEXT`)}</Text>,

    options: [
      {
        id: 'scene-getstarterdigimon-016-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '017'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
