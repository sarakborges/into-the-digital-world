import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const SaveGame001 = () => {
  const { setScene } = useScene()

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
