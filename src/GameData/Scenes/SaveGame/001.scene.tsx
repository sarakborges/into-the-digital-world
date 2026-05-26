import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveProfile } from '@/Helpers/saveProfile.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const SaveGame001 = () => {
  const { setScene } = useScene()
  const { profile } = useProfile()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.savemon,

    content: <Text as="p">{getDialogs('SAVEGAME_001_TEXT')}</Text>,

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
