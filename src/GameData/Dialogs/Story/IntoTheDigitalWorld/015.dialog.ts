import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld014 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/014.dialog'
import { getIntoTheDigitalWorld016 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/016.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useDialogOptionsStore } from '@/Stores/DialogOptions.store'

export const getIntoTheDigitalWorld015 = (topic: string): DialogType => {
  return {
    speaker: {
      id: NpcGennai.id,
      name: NpcGennai.name,
      title: getTexts(NpcGennai.title),
      portrait: NpcGennai.portrait
    },

    text: getTexts(`ITDW_015_${topic.toUpperCase()}`),

    actions: [
      {
        id: 'ITDW_015_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          const { dialogOptions } = useDialogOptionsStore.getState()

          if (!dialogOptions.length) {
            changeDialog(getIntoTheDigitalWorld016())
            return
          }

          changeDialog(IntoTheDigitalWorld014)
        }
      }
    ]
  }
}
