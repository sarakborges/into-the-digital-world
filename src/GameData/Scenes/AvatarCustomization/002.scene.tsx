import type { DialogType } from '@/Types/Dialog.type'
import type { ProfileType } from '@/Types/Profile.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'
import { useAvatarCustomization } from '@/Hooks/AvatarCustomization.hook'

import { Dialog } from '@/Components/App/Dialog'
import { AvatarCustomization } from '@/Components/DigiviceApps/AvatarCustomization'

export const AvatarCustomization002 = () => {
  const { profile, setProfile } = useProfile()
  const { setScene } = useScene()
  const { customization, setCustomization } = useAvatarCustomization()

  const dialogOptions: DialogType = {
    content: <AvatarCustomization />,
    options: [
      !!customization?.layer && {
        id: 'scene-avatarCustomization-002-back',
        text: getDialogs('SCENES_BACK_BUTTON'),
        action: () => {
          setCustomization({ avatar: customization.avatar })
        }
      },

      !customization?.layer && {
        id: 'scene-avatarCustomization-002-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: () => {
          if (!customization) {
            return
          }

          const updatedProfile: ProfileType = {
            ...profile!,
            avatar: customization.avatar,
            currentScene: null
          }

          setScene({
            currentScene: 'avatarCustomization',
            currentStage: '003'
          })

          setCustomization({ avatar: customization.avatar })
          setProfile(updatedProfile)
          saveSession({ key: 'profile', value: updatedProfile })
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
