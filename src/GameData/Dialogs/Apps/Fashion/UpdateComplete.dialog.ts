import type { DialogType } from '@/Types/Dialog.type'

import { RootDomainDorms } from '@/GameData/Dialogs/Scenes/RootDomainDorms.dialog'
import { NpcDressmon } from '@/GameData/Npcs/Dressmon.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'
import { setProfileAvatar } from '@/Helpers/Systems/Profile/setProfileAvatar.helper'

export const FashionUpdateComplete = {
  speaker: {
    id: NpcDressmon.id,
    name: NpcDressmon.name,
    title: getTexts(NpcDressmon.title),
    portrait: NpcDressmon.picture
  },

  text: getTexts('FASHION_UPDATE_COMPLETE'),

  actions: [
    {
      id: 'FASHION_UPDATE_COMPLETE_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(RootDomainDorms)

        setProfileAvatar()
      }
    }
  ]
} satisfies DialogType
