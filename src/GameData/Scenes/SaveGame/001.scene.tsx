import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveProfile } from '@/Helpers/saveProfile.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const SaveGame001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const { profile } = useProfileStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.savemon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('SAVEGAME_001_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-savegame-001-refuse',
        text: getDialogs('SCENES_BACK_BUTTON'),
        action: () => {
          setScene(null)
        }
      },

      {
        id: 'scene-savegame-001-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: () => {
          saveProfile({ profile: profile! })

          setScene({
            currentScene: 'saveGame',
            currentStage: '002'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
