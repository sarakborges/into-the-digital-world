import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld031 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/030.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld030 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_030'),

  actions: [
    {
      id: 'ITDW_030_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(getIntoTheDigitalWorld031())
      }
    }
  ]
} satisfies DialogType
