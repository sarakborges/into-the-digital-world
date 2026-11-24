import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld022 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/022.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { SkipIntroductionToAvatar } from '@/Components/DialogContent/SkipIntroductionToAvatar'

export const IntoTheDigitalWorld021 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    portrait: NpcGennai.portrait
  },

  text: getTexts('ITDW_021'),

  content: <SkipIntroductionToAvatar />,

  actions: [
    {
      id: 'ITDW_021_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(IntoTheDigitalWorld022)
      }
    }
  ]
} satisfies DialogType
