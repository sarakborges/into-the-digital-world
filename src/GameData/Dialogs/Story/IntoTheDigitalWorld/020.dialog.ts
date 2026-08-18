import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld021 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/021.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'

import { useDialogStore } from '@/Stores/Dialog.store'

export const IntoTheDigitalWorld020 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    picture: NpcGennai.picture
  },

  text: getTexts('ITDW_020'),

  actions: [
    {
      id: 'ITDW_020_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        const { setDialog } = useDialogStore.getState()

        setDialog(IntoTheDigitalWorld021)
      }
    }
  ]
} satisfies DialogType
