import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld024 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/024.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'

import { useDialogStore } from '@/Stores/Dialog.store'

export const IntoTheDigitalWorld023 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    picture: NpcGennai.picture
  },

  text: getTexts('ITDW_023'),

  actions: [
    {
      id: 'ITDW_023_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        const { setDialog } = useDialogStore.getState()

        setDialog(getIntoTheDigitalWorld024())
      }
    }
  ]
} satisfies DialogType
