import type { DialogType } from '@/Types/Dialog.type'

import { GetStarterDigimon006 } from '@/GameData/Scenes/Story/GetStarterDigimon/006.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const GetStarterDigimon005 = () => {
  const { profile } = useProfileStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  const dorimonMeeting = profile?.meaningfulChoices['dorimonMeeting']

  if (!profile || !dorimonMeeting) {
    return
  }

  const dialogOptions: DialogType = {
    content: (
      <div className="text-bubble">
        <Text as="p">
          {getTexts(
            `GETSTARTERDIGIMON_005_TEXT_${dorimonMeeting.toLocaleUpperCase()}`
          )}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-005-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: GetStarterDigimon006 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
