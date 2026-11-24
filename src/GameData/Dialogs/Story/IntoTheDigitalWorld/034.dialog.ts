import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld035 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/035.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld034 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_034'),

  actions: [
    {
      id: 'ITDW_034_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(IntoTheDigitalWorld035)
      }
    }
  ]
} satisfies DialogType
