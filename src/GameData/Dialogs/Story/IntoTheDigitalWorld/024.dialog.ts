import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld025 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/025.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld024 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_024'),

  actions: [
    {
      id: 'ITDW_024_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(IntoTheDigitalWorld025)
      }
    }
  ]
} satisfies DialogType
