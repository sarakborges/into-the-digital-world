import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'

import type { DialogType } from '@/Types/Dialog.type'
import type { DorimonMeetingChoice } from '@/Types/Profile.type'

import { GetStarterDigimon005 } from '@/GameData/Scenes/Story/GetStarterDigimon/005.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { reactToMeaningfulChoice } from '@/Helpers/Systems/Scenes/reactToMeaningfulChoice.helper'

import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const GetStarterDigimon004 = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogReactions: Array<{
    label: string
    value: DorimonMeetingChoice
  }> = [
    {
      label: getTexts('GETSTARTERDIGIMON_004_OPTION_ACCEPT'),
      value: 'accept'
    },

    {
      label: getTexts('GETSTARTERDIGIMON_004_OPTION_NEUTRAL'),
      value: 'neutral'
    },

    {
      label: getTexts('GETSTARTERDIGIMON_004_OPTION_REFUSE'),
      value: 'refuse'
    }
  ]

  const dialogOptions: DialogType = {
    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">{getTexts('GETSTARTERDIGIMON_004_TEXT')}</Text>
        </div>

        <div className="dialog-reactions">
          {dialogReactions.map((reaction) => (
            <div key={`scene-getstarterdigimon-004-option-${reaction.value}`}>
              <Button
                onClick={() =>
                  reactToMeaningfulChoice({
                    reaction: {
                      name: 'dorimonMeeting',
                      value: reaction.value
                    },

                    nextScene: { component: GetStarterDigimon005 }
                  })
                }
              >
                <HiOutlineChatBubbleLeftEllipsis />
                <Text>{reaction.label}</Text>
              </Button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return <Dialog {...dialogOptions} />
}
