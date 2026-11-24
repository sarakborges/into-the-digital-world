import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld008 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/011.dialog'
import { getIntoTheDigitalWorld010 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/013.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useDialogOptionsStore } from '@/Stores/DialogOptions.store'

export const getIntoTheDigitalWorld009 = (topic: string): DialogType => {
  return {
    speaker: {
      id: NpcGennai.id,
      name: NpcGennai.name,
      title: getTexts(NpcGennai.title),
      portrait: NpcGennai.portrait
    },

    text: getTexts(`ITDW_009_${topic.toUpperCase()}`),

    actions: [
      {
        id: 'ITDW_009_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          const { dialogOptions } = useDialogOptionsStore.getState()

          if (!dialogOptions.length) {
            changeDialog(getIntoTheDigitalWorld010())
            return
          }

          changeDialog(IntoTheDigitalWorld008)
        }
      }
    ]
  }
}
