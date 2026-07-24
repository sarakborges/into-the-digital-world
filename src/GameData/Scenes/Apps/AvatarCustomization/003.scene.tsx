import type { DialogType } from '@/Types/Dialog.type'
import type { ProfileType } from '@/Types/Profile.type'

import { NpcDressmon } from '@/GameData/Npcs/Dressmon.npc'
import { AvatarFixingQuest } from '@/GameData/Quests/AvatarFixing.quest'
import { AvatarCustomization002 } from '@/GameData/Scenes/Apps/AvatarCustomization/002.scene'
import { Introduction021 } from '@/GameData/Scenes/Story/Introduction/021.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'
import { isQuestDone } from '@/Helpers/Systems/Quests/isQuestDone.helper'

import { useAvatarCustomizationStore } from '@/Stores/AvatarCustomization.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { AppAvatarCustomization } from '@/Components/Digivice/Apps/AppAvatarCustomization/App/AppAvatarCustomization.component'

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

    if (!doneQuests.includes(AvatarFixingQuest.id)) {
      setScene({ component: Introduction021 })
    } else {
      setScene({ component: AvatarCustomization002 })
    }

    saveSession(updatedProfile)
  }

  const dialogOptions: DialogType = {
    speaker: NpcDressmon,

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

          setAvatarCustomization({ avatar: avatarCustomization.avatar })
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
