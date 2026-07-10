import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

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
          {getTexts(
            `GETSTARTERDIGIMON_005_TEXT_${profile.meaningfulChoices.dorimonMeeting.toLocaleUpperCase()}`
          )}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-005-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
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
