import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld036 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/036.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld035 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_035'),

  actions: [
    {
      id: 'ITDW_035_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(IntoTheDigitalWorld036)
      }
    }
  ]
} satisfies DialogType
