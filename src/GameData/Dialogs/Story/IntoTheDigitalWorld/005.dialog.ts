import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'

export const IntoTheDigitalWorld005 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: NpcGennai.title,
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_005'),

  actions: [
    {
      id: `ITDW_005_CONTINUE`,

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {}
    }
  ]
} satisfies DialogType
