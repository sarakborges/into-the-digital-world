import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld010 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/010.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld009 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_009'),

  actions: [
    {
      id: 'ITDW_009_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(IntoTheDigitalWorld010)
      }
    }
  ]
} satisfies DialogType
