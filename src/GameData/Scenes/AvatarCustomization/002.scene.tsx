import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'
import { Dialog } from '@/Components/App/Dialog'

export const AvatarCustomization002 = () => {
  const { setScene } = useScene()
  const { profile } = useProfile()

  const dialogOptions: DialogType = {
    speaker: profile?.name,
    speakerAvatar: 'avatars/glitch',

    content: <></>,

    options: [
      {
        text: getDialogs('SCENES_LEAVE_BUTTON'),
        action: () => {
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
