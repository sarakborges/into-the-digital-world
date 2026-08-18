import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld022 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/022.dialog'

import { getTexts } from '@/Helpers/Language'

import { useDialogStore } from '@/Stores/Dialog.store'

export const IntoTheDigitalWorld021 = {
  text: getTexts('ITDW_021'),

  actions: [
    {
      id: 'ITDW_021_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        const { setDialog } = useDialogStore.getState()

        setDialog(IntoTheDigitalWorld022)
      }
    }
  ]
} satisfies DialogType
