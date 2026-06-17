import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/Language'

import { Text } from '@/DesignSystem/Text'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/Dialog'

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
        <Text as="p">{getDialogs(`GETSTARTERDIGIMON_008_TEXT`)}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-008-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
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
