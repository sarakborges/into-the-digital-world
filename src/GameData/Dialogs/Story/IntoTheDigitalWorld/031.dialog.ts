import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld032 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/032.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld031 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_031'),

  actions: [
    {
      id: 'ITDW_031_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(getIntoTheDigitalWorld032())
      }
    }
  ]
} satisfies DialogType
