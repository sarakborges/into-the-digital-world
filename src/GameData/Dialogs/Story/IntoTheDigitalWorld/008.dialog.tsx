import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'

import { GennaiExplanationTopic } from '@/Components/DialogContent/GennaiExplanationTopic'

export const IntoTheDigitalWorld008 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_008'),
  content: <GennaiExplanationTopic />
} satisfies DialogType
