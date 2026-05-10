import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { PlayerProfile } from '@/Components/App/PlayerProfile'
import { Dialog } from '@/Components/App/Dialog'

export const Profile002 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    content: <PlayerProfile />,

    options: [
      {
        id: 'scene-profile-002-back',
        text: getDialogs('SCENES_LEAVE_BUTTON'),
        action: () => {
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
