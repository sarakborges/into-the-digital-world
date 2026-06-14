import type { ProfileType } from '@/Types/Profile.type'
import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useAvatarCustomizationStore } from '@/Stores/AvatarCustomization.store'

import { Dialog } from '@/Components/App/Dialog'
import { AvatarCustomization } from '@/Components/App/AvatarCustomization'

export const AvatarCustomization003 = () => {
  const { profile, setProfile } = useProfileStore((state) => state)
  const { avatarCustomization, setAvatarCustomization } =
    useAvatarCustomizationStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  const saveAvatar = () => {
    if (!avatarCustomization) {
      return
    }

    const updatedProfile: ProfileType = {
      ...profile!,
      avatar: avatarCustomization.avatar
    }

    setScene(null)

    setAvatarCustomization({ avatar: avatarCustomization.avatar })
    setProfile(updatedProfile)
    saveSession({ key: 'profile', value: updatedProfile })
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.dressmon,

    content: <AvatarCustomization />,

    options: [
      {
        id: 'scene-avatarCustomization-003-back',
        text: getDialogs('SCENES_BACK_BUTTON'),
        action: () => {
          setAvatarCustomization({ ...avatarCustomization!, layer: undefined })
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
