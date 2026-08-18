import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'

import { useDialogStore } from '@/Stores/Dialog.store'

export const IntoTheDigitalWorld029 = {
  speaker: {
    id: NpcGennai.id,
    name: NpcGennai.name,
    title: getTexts(NpcGennai.title),
    picture: NpcGennai.picture
  },

  text: getTexts('ITDW_029'),

  actions: [
    {
      id: 'ITDW_029_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        const { setDialog } = useDialogStore.getState()

        setDialog(null)
      }
    }
  ]
} satisfies DialogType
