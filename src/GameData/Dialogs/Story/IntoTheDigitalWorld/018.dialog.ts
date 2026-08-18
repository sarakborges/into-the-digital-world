import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld019 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/019.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'

import { useDialogStore } from '@/Stores/Dialog.store'

export const IntoTheDigitalWorld018 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    picture: NpcGennai.picture
  },

  text: getTexts('ITDW_018'),

  actions: [
    {
      id: 'ITDW_018_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        const { setDialog } = useDialogStore.getState()

        setDialog(IntoTheDigitalWorld019)
      }
    }
  ]
} satisfies DialogType
