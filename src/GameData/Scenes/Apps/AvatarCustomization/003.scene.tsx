import type { DialogType } from '@/Types/Dialog.type'
import { AllScenes } from '@/GameData/Scenes'
import type { ProfileType } from '@/Types/Profile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'

import { getTexts } from '@/Helpers/Language'
import { saveSession } from '@/Helpers/Systems/Data'
import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useAvatarCustomizationStore } from '@/Stores/AvatarCustomization.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { AppAvatarCustomization } from '@/Components/Digivice/Apps/AppAvatarCustomization/App'

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
      setScene(AllScenes.introduction['021'])
    } else {
      setScene(AllScenes.avatarCustomization['002'])
    }

    saveSession(updatedProfile)
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.dressmon,

    content: <AppAvatarCustomization />,

    options: [
      {
        id: 'scene-avatarCustomization-003-back',
        text: getTexts('SCENES_BACK_BUTTON'),
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
        text: getTexts('SCENES_CONFIRM_BUTTON'),
        action: saveAvatar
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
