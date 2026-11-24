import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld006 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/006.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const getIntoTheDigitalWorld005 = (): DialogType => {
  return {
    speaker: {
      id: NpcGennai.id,
      name: '???',
      portrait: NpcGennai.portrait
    },

    text: getTexts('ITDW_005'),

    actions: [
      {
        id: 'ITDW_005_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld006)
        }
      }
    ]
  }
}
