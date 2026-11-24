import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld024 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/024.dialog'
import { NpcDressmon } from '@/GameData/Npcs/Dressmon.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs/changeDialog.helper'
import { setProfileAvatar } from '@/Helpers/Systems/Profile/setProfileAvatar.helper'

export const FashionFixComplete = {
  speaker: {
    id: NpcDressmon.id,
    name: NpcDressmon.name,
    title: getTexts(NpcDressmon.title),
    portrait: NpcDressmon.picture
  },

  text: getTexts('FASHION_FIX_COMPLETE'),

  actions: [
    {
      id: 'FASHION_FIX_COMPLETE_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        setProfileAvatar()
        changeDialog(getIntoTheDigitalWorld024())
      }
    }
  ]
} satisfies DialogType
