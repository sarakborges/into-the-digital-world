import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld017 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/017.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld016 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_016'),

  actions: [
    {
      id: 'ITDW_016_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(getIntoTheDigitalWorld017())
      }
    }
  ]
} satisfies DialogType
