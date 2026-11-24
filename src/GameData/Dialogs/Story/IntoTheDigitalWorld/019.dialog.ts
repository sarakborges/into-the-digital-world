import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld020 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/023.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const getIntoTheDigitalWorld019 = (): DialogType => {
  return {
    speaker: {
      id: NpcGennai.id,
      name: NpcGennai.name,
      title: getTexts(NpcGennai.title),
      portrait: NpcGennai.portrait
    },

    text: getTexts('ITDW_019'),

    actions: [
      {
        id: 'ITDW_019_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(getIntoTheDigitalWorld020())
        }
      }
    ]
  }
}
