import type { DialogType } from '@/Types/Dialog.type'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { getTranslation } from '@/Helpers/Language'

import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const Introduction006 = () => {
  const { setScene } = useSceneStore((state) => state)

  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: { ...profile, isPlayer: true },

    content: (
      <div className="text-bubble">
        <Text as="p">
          {getTranslation('INTRODUCTION_006_TEXT', {
            '[NAME]': profile.name
          })}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-006-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
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
