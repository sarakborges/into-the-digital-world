import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld034 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/034.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld033 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_033'),

  actions: [
    {
      id: 'ITDW_033_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(IntoTheDigitalWorld034)
      }
    }
  ]
} satisfies DialogType
