import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'

import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'
import { Button } from '@/Components/System/Button'

import { Dialog } from '@/Components/App/Dialog'

export const GetStarterDigimon004 = () => {
  const profile = useProfileStore((state) => state.profile)
  const setProfile = useProfileStore((state) => state.setProfile)
  const setScene = useSceneStore((state) => state.setScene)

  const dialogReactions = [
    {
      label: getDialogs('GETSTARTERDIGIMON_004_OPTION_ACCEPT'),
      value: 'accept'
    },

    {
      label: getDialogs('GETSTARTERDIGIMON_004_OPTION_NEUTRAL'),
      value: 'neutral'
    },

    {
      label: getDialogs('GETSTARTERDIGIMON_004_OPTION_REFUSE'),
      value: 'refuse'
    }
  ]

  const reactToScene = (reaction: string) => {
    setProfile({
      ...profile!,
      meaningfulChoices: {
        ...profile!.meaningfulChoices,
        dorimonMeeting: reaction
      }
    })

    setScene({
      currentScene: 'getStarterDigimon',
      currentStage: '005'
    })
  }

  const dialogOptions: DialogType = {
    content: (
      <>
        <Text as="p">{getDialogs('GETSTARTERDIGIMON_004_TEXT')}</Text>

        <div className="dialog-reactions">
          {dialogReactions.map((reaction) => (
            <div key={`scene-getstarterdigimon-004-option-${reaction.value}`}>
              <Button onClick={() => reactToScene(reaction.value)}>
                <HiOutlineChatBubbleLeftEllipsis />
                <Text>{reaction.label}</Text>
              </Button>
            </div>
          ))}
        </div>
      </>
    )
  }

  return <Dialog {...dialogOptions} />
}
