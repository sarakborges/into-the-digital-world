import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'

import { useProfileStore } from '@/Stores/Profile.store'
import { deleteSession } from '@/Helpers/deleteSession.helper'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Logoff001 = () => {
  const setProfile = useProfileStore((state) => state.setProfile)
  const setScene = useSceneStore((state) => state.setScene)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.logamon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('LOGOFF_001_TEXT')}</Text>
      </div>
    ),

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
