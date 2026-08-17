import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'

export const IntoTheDigitalWorld004 = {
  speaker: {
    id: NpcGennai.id,
    name: '???',
    picture: NpcGennai.fullImage
  },

  text: getTexts('ITDW_004'),

  actions: [
    {
      id: `ITDW_004_CONTINUE`,

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {}
    }
  ]
} satisfies DialogType
