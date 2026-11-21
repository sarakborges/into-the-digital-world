import type { DialogType } from '@/Types/Dialog.type'

import { RootDomainDorms } from '@/GameData/Dialogs/Scenes/RootDomainDorms.dialog'
import { NpcDressmon } from '@/GameData/Npcs/Dressmon.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs/changeDialog.helper'

export const FashionUpdateCancel = {
  speaker: {
    id: NpcDressmon.id,
    name: NpcDressmon.name,
    title: getTexts(NpcDressmon.title),
    portrait: NpcDressmon.picture
  },

  text: getTexts('FASHION_UPDATE_CANCEL'),

  actions: [
    {
      id: 'FASHION_UPDATE_CANCEL_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(RootDomainDorms)
      }
    }
  ]
} satisfies DialogType
