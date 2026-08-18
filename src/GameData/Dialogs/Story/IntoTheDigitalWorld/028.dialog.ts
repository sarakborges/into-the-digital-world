import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld029 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/029.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'

import { useDialogStore } from '@/Stores/Dialog.store'

export const IntoTheDigitalWorld028 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    picture: NpcGennai.picture
  },

  text: getTexts('ITDW_028'),

  actions: [
    {
      id: 'ITDW_028_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        const { setDialog } = useDialogStore.getState()

        setDialog(IntoTheDigitalWorld029)
      }
    }
  ]
} satisfies DialogType
