import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'
import { useAvatarCustomization } from '@/Hooks/AvatarCustomization.hook'

import { Dialog } from '@/Components/App/Dialog'
import { AvatarCustomization } from '@/Components/App/AvatarCustomization'

export const AvatarCustomization003 = () => {
  const { profile, setProfile } = useProfile()
  const { setScene } = useScene()
  const { customization, setCustomization } = useAvatarCustomization()

  const dialogOptions: DialogType = {
    content: <AvatarCustomization />,
    options: [
      !!customization?.layer && {
        text: getDialogs('SCENES_BACK_BUTTON'),
        action: () => {
          setCustomization({ avatar: customization.avatar })
        }
      },

      !customization?.layer && {
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: () => {
          if (!customization) {
            return
          }

          const updatedProfile = { ...profile!, avatar: customization.avatar }

          setScene(null)
          setCustomization({ avatar: customization.avatar })
          setProfile(updatedProfile)
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
