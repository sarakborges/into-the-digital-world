import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'

export const IntoTheDigitalWorld003 = {
  speaker: {
    id: NpcGennai.id,
    name: '???',
    picture: NpcGennai.fullImage
  },

  text: getTexts('ITDW_003'),

  actions: [
    {
      id: `ITDW_002_CONTINUE`,

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {}
    }
  ]
} satisfies DialogType
