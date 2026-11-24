import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'

import { InsertPlayerName } from '@/Components/DialogContent/InsertPlayerName'

export const IntoTheDigitalWorld004 = {
  speaker: {
    id: NpcGennai.id,
    name: `???`,
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_004'),

  content: <InsertPlayerName />
} satisfies DialogType
