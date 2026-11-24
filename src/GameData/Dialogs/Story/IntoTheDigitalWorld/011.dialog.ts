import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld012 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/015.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld011 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_011'),

  actions: [
    {
      id: 'ITDW_011_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(getIntoTheDigitalWorld012())
      }
    }
  ]
} satisfies DialogType
