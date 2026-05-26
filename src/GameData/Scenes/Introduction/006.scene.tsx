import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction006 = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const profile = useProfileStore((state) => state.profile)

  const dialogOptions: DialogType = {
    speaker: { ...profile!, isPlayer: true },

    content: (
      <Text as="p">
        {getDialogs('INTRODUCTION_006_TEXT').replaceAll(
          '[NAME]',
          profile?.name
        )}
      </Text>
    ),

    options: [
      {
        id: 'scene-introduction-006-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '007'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
