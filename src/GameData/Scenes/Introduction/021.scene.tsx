import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/Language/getDialogs.helper'
import { addNewQuest } from '@/Systems/Quests/addNewQuest.helper'
import { saveSession } from '@/Systems/Profile/saveSession.helper'

import { AllItems } from '@/GameData/Items'
import { AllNpcs } from '@/GameData/Npcs'
import { AvatarFixingQuest } from '@/GameData/Quests/AvatarFixing.quest'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction021 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { setProfile } = useProfileStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('INTRODUCTION_021_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-021-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(null)

          addNewQuest(AvatarFixingQuest.id)

          const currentProfile = useProfileStore.getState().profile

          const updatedProfile = {
            ...currentProfile!,
            currentScene: null,
            items: {
              [AllItems.digivice?.id]: 1
            }
          }

          setProfile(updatedProfile)
          saveSession({
            key: 'profile',
            value: updatedProfile
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
