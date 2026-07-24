import type { DialogType } from '@/Types/Dialog.type'

import { NpcSavemon } from '@/GameData/Npcs/Savemon.npc'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const SaveGame002 = () => {
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  if (!digivice) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: NpcSavemon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('SAVEGAME_002_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-savegame-002-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const updatedDigivice = { ...digivice }

          delete updatedDigivice.currentApp
          setDigivice(updatedDigivice)
          closeScene()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
