import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld011 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/011.dialog'
import { getIntoTheDigitalWorld013 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/013.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useDialogOptionsStore } from '@/Stores/DialogOptions.store'

export const getIntoTheDigitalWorld012 = (topic: string): DialogType => {
  return {
    speaker: {
      id: NpcGennai.id,
      name: NpcGennai.name,
      title: getTexts(NpcGennai.title),
      portrait: NpcGennai.portrait
    },

    text: getTexts(`ITDW_012_${topic.toUpperCase()}`),

    actions: [
      {
        id: 'ITDW_012_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          const { dialogOptions } = useDialogOptionsStore.getState()

          if (!dialogOptions.length) {
            changeDialog(getIntoTheDigitalWorld013())
            return
          }

          changeDialog(IntoTheDigitalWorld011)
        }
      }
    ]
  }
}
