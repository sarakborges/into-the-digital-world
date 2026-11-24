import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld004 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/004.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs/changeDialog.helper'

export const IntoTheDigitalWorld003 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_003'),

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
