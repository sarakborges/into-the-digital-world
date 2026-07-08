import type { DialogType } from '@/Types/Dialog.type'
import { getTranslation } from '@/Helpers/Language'

import { Text } from '@/Components/DesignSystem/Text'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const GetStarterDigimon008 = () => {
  const { setScene } = useSceneStore((state) => state)

  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: { ...profile, isPlayer: true },

    content: (
      <div className="text-bubble">
        <Text as="p">{getTranslation(`GETSTARTERDIGIMON_008_TEXT`)}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-008-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '009'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
