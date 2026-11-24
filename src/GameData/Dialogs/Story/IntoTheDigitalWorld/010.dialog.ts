import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld008 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/009.dialog'
import { getIntoTheDigitalWorld011 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/011.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useDialogOptionsStore } from '@/Stores/DialogOptions.store'

export const getIntoTheDigitalWorld010 = (topic: string): DialogType => {
  return {
    speaker: {
      id: NpcGennai.id,
      name: NpcGennai.name,
      title: getTexts(NpcGennai.title),
      portrait: NpcGennai.portrait
    },

    text: getTexts(`ITDW_010_${topic.toUpperCase()}`),

    actions: [
      {
        id: 'ITDW_010_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          const { dialogOptions } = useDialogOptionsStore.getState()

          if (!dialogOptions.length) {
            changeDialog(getIntoTheDigitalWorld011())
            return
          }

          changeDialog(IntoTheDigitalWorld008)
        }
      }
    ]
  }
}
