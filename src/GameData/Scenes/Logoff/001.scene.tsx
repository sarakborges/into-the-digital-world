import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { AllNpcs } from '@/GameData/Npcs'

import { useProfile } from '@/Hooks/Profile.hook'
import { deleteSession } from '@/Helpers/deleteSession.helper'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Logoff001 = () => {
  const { setProfile } = useProfile()
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.logamon,

    content: <Text as="p">{getDialogs('LOGOFF_001_TEXT')}</Text>,

    options: [
      {
        id: 'scene-logoff-001-refuse',
        text: getDialogs('SCENES_BACK_BUTTON'),
        action: () => {
          setScene(null)
        }
      },

      {
        id: 'scene-logoff-001-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: () => {
          setProfile(null)
          setScene(null)

          deleteSession({ key: 'profile' })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
