import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld037 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/037.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld036 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_036'),

  actions: [
    {
      id: 'ITDW_036_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(IntoTheDigitalWorld037)
      }
    }
  ]
} satisfies DialogType
