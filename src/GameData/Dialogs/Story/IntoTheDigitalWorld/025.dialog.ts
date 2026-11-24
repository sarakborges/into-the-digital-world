import type { DialogType } from '@/Types/Dialog.type'

import { RootDomainDormsDialog } from '@/GameData/Dialogs/Scenes/RootDomainDorms.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld025 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_025'),

  actions: [
    {
      id: 'ITDW_025_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(RootDomainDormsDialog)
      }
    }
  ]
} satisfies DialogType
