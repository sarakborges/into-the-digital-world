import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld024 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/024.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld023 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_023'),

  actions: [
    {
      id: 'ITDW_023_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(getIntoTheDigitalWorld024())
      }
    }
  ]
} satisfies DialogType
