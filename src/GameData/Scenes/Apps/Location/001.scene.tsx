import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { closeScene } from '@/Helpers/Systems/Scenes'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { AppLocation } from '@/Components/Digivice/Apps/AppLocation'

export const Location001 = () => {
  const dialogOptions: DialogType = {
    speaker: NpcGennai,

    content: (
      <div className="text-bubble">
        <AppLocation />
      </div>
    ),

    options: [
      {
        id: 'scene-logoff-001-cancel',
        text: getTexts('SCENES_CANCEL_BUTTON'),
        action: () => {
          closeScene()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
