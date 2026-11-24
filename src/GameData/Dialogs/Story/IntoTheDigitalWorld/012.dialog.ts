import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld013 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/012.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld012 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_012'),

  actions: [
    {
      id: 'ITDW_012_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(getIntoTheDigitalWorld013())
      }
    }
  ]
} satisfies DialogType
