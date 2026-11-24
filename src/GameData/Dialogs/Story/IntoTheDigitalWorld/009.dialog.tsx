import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'

import { GennaiExplanationTopic } from '@/Components/DialogContent/GennaiExplanationTopic'

export const IntoTheDigitalWorld009 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_009'),
  content: <GennaiExplanationTopic />
} satisfies DialogType
