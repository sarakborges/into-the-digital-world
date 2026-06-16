import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'

import { useProfileStore } from '@/Stores/Profile.store'
import { deleteSession } from '@/Helpers/Systems/Profile'

import { getDialogs } from '@/Helpers/Language'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Logoff001 = () => {
  const { setProfile } = useProfileStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.logamon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('LOGOFF_001_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-logoff-001-cancel',
        text: getDialogs('SCENES_CANCEL_BUTTON'),
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
