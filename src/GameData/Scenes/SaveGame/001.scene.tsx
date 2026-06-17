import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/Language'
import { saveProfile } from '@/Helpers/Systems/Profile'

import { AllNpcs } from '@/GameData/Npcs'

import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/DesignSystem/Text'

import { Dialog } from '@/Components/Dialog'

export const SaveGame001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.savemon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('SAVEGAME_001_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-savegame-001-cancel',
        text: getDialogs('SCENES_CANCEL_BUTTON'),
        action: () => {
          setScene(null)
        }
      },

      {
        id: 'scene-savegame-001-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: () => {
          saveProfile()

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
