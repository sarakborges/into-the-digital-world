import type { DialogType } from '@/Types/Dialog.type'
import type { ProfileType } from '@/Types/Profile.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'
import { useAvatarCustomization } from '@/Hooks/AvatarCustomization.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'

import { Dialog } from '@/Components/App/Dialog'
import { AvatarCustomization } from '@/Components/App/AvatarCustomization'

export const Introduction025 = () => {
  const { profile, setProfile } = useProfile()
  const { setScene } = useScene()
  const { digivice, setDigivice } = useDigivice()
  const { customization, setCustomization } = useAvatarCustomization()

  const dialogOptions: DialogType = {
    content: <AvatarCustomization />,

    options: [
      !!customization?.layer && {
        id: 'scene-introduction-025-back',
        text: getDialogs('SCENES_BACK_BUTTON'),
        action: () => {
          setCustomization({ avatar: customization.avatar })
        }
      },

      !customization?.layer && {
        id: 'scene-introduction-025-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: () => {
          if (!customization) {
            return
          }

          setScene({
            currentScene: 'introduction',
            currentStage: '026'
          })

          setCustomization({ avatar: customization.avatar })
          setDigivice({ ...digivice, isOpen: false })

          const updatedProfile: ProfileType = {
            ...profile!,
            avatar: customization.avatar
          }

          setProfile(updatedProfile)
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
