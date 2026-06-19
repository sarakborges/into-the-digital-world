import type { ProfileType } from '@/Types/Profile.type'
import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/Language'
import { saveSession } from '@/Helpers/Systems/Data'
import { isQuestDone } from '@/Helpers/Systems/Quests'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useAvatarCustomizationStore } from '@/Stores/AvatarCustomization.store'

import { Dialog } from '@/Components/Dialog'
import { AvatarCustomization } from '@/Components/AvatarCustomization'

export const AvatarCustomization003 = () => {
  const { profile } = useProfileStore((state) => state)
  const { avatarCustomization, setAvatarCustomization } =
    useAvatarCustomizationStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  const saveAvatar = () => {
    if (!avatarCustomization || !profile) {
      return
    }

    const updatedProfile: ProfileType = {
      ...profile,
      avatar: avatarCustomization.avatar
    }

    const doneQuests = Object.keys(updatedProfile.quests).filter((quest) =>
      isQuestDone(quest)
    )

    if (!doneQuests.includes(AllQuests.avatarFixing.id)) {
      setScene({
        currentScene: 'introduction',
        currentStage: '025'
      })
    } else {
      setScene({
        currentScene: 'avatarCustomization',
        currentStage: '002'
      })
    }

    saveSession(updatedProfile)
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.dressmon,

    content: <AvatarCustomization />,

    options: [
      {
        id: 'scene-avatarCustomization-003-back',
        text: getDialogs('SCENES_BACK_BUTTON'),
        action: () => {
          const { avatarCustomization } = useAvatarCustomizationStore.getState()

          if (!avatarCustomization) {
            return
          }

          setAvatarCustomization({ ...avatarCustomization, layer: undefined })
        },
        disabled: !avatarCustomization?.layer
      },

      {
        id: 'scene-avatarCustomization-003-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: saveAvatar
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
