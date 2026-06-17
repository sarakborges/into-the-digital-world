import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/Language'

import { Text } from '@/DesignSystem/Text'

import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Dialog } from '@/Components/Dialog'

export const GetStarterDigimon005 = () => {
  const { profile } = useProfileStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    content: (
      <div className="text-bubble">
        <Text as="p">
          {getDialogs(
            `GETSTARTERDIGIMON_005_TEXT_${profile.meaningfulChoices.dorimonMeeting.toLocaleUpperCase()}`
          )}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-005-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '006'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
