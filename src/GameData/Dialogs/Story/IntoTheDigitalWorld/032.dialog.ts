import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld033 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/033.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld032 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_032'),

  actions: [
    {
      id: 'ITDW_032_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(IntoTheDigitalWorld033)
      }
    }
  ]
} satisfies DialogType
