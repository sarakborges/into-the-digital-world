import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld004 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/004.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs/changeDialog.helper'

export const IntoTheDigitalWorld003 = {
  speaker: {
    id: NpcGennai.id,
    name: `???`
  },

  image: {
    src: NpcGennai.picture,
    alt: NpcGennai.name
  },

  text: getTexts('ITDW_003'),

  image: {
    src: NpcGennai.picture,
    alt: `Unknown old man`
  },

  actions: [
    {
      id: 'ITDW_003_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(IntoTheDigitalWorld004)
      }
    }
  ]
} satisfies DialogType
