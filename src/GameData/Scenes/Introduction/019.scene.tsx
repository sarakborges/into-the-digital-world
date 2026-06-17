import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/DesignSystem/Text'

import { Dialog } from '@/Components/Dialog'

export const Introduction019 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: { ...profile, isPlayer: true },

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('INTRODUCTION_019_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-019-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '020'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
