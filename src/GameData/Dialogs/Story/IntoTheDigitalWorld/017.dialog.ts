import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld018 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/018.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld017 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_017'),

  actions: [
    {
      id: 'ITDW_017_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(getIntoTheDigitalWorld018())
      }
    }
  ]
} satisfies DialogType
