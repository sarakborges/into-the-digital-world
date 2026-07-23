import type { DialogType } from '@/Types/Dialog.type'

import { NpcSavemon } from '@/GameData/Npcs/Savemon.npc'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import { AppSaveGame } from '@/Components/Digivice/Apps/AppSaveGame/AppSaveGame.component'

export const SaveGame001 = () => {
  const dialogOptions: DialogType = {
    speaker: NpcSavemon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">{getTexts('SAVEGAME_001_TEXT')}</Text>
        </div>

        <AppSaveGame />
      </div>
    ),

    options: [
      {
        id: 'scene-savegame-001-cancel',
        text: getTexts('SCENES_CANCEL_BUTTON'),
        action: () => {
          closeScene()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
