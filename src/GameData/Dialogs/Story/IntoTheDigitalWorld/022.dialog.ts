import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld023 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/023.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const getIntoTheDigitalWorld022 = (): DialogType => {
  return {
    speaker: {
      id: NpcGennai.id,
      name: NpcGennai.name,
      title: getTexts(NpcGennai.title),
      portrait: NpcGennai.portrait
    },

    text: getTexts('ITDW_022'),

    actions: [
      {
        id: 'ITDW_022_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(getIntoTheDigitalWorld023())
        }
      }
    ]
  }
}
