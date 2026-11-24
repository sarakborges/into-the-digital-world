import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld038 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/038.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld037 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_037'),

  actions: [
    {
      id: 'ITDW_037_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(IntoTheDigitalWorld038)
      }
    }
  ]
} satisfies DialogType
