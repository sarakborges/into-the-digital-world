import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld029 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/028.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld028 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_028'),

  actions: [
    {
      id: 'ITDW_028_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(getIntoTheDigitalWorld029())
      }
    }
  ]
} satisfies DialogType
