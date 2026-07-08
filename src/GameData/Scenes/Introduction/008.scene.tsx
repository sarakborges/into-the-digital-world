import type { DialogType } from '@/Types/Dialog.type'
import { getTranslation } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'


import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const Introduction008 = () => {
  const { profile } = useProfileStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: { ...profile, isPlayer: true },

    content: (
      <div className="text-bubble">
        <Text as="p">{getTranslation('INTRODUCTION_008_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-008-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '009'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
