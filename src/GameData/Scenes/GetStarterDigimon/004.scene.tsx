import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'
import { getTranslation } from '@/Helpers/Language'

import type { DialogType } from '@/Types/Dialog.type'

import { reactToMeaningfulChoice } from '@/Helpers/Systems/Scenes'

import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const GetStarterDigimon004 = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogReactions = [
    {
      label: getTranslation('GETSTARTERDIGIMON_004_OPTION_ACCEPT'),
      value: 'accept'
    },

    {
      label: getTranslation('GETSTARTERDIGIMON_004_OPTION_NEUTRAL'),
      value: 'neutral'
    },

    {
      label: getTranslation('GETSTARTERDIGIMON_004_OPTION_REFUSE'),
      value: 'refuse'
    }
  ]

  const dialogOptions: DialogType = {
    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">{getTranslation('GETSTARTERDIGIMON_004_TEXT')}</Text>
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

                    nextScene: {
                      currentScene: 'getStarterDigimon',
                      currentStage: '005'
                    }
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
