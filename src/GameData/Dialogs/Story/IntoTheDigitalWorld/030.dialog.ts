import type { DialogType } from '@/Types/Dialog.type'

import { FashionIntroduction } from '@/GameData/Dialogs/Apps/Fashion/Introduction.dialog'

import { getTexts } from '@/Helpers/Language'

import { useDialogStore } from '@/Stores/Dialog.store'

export const IntoTheDigitalWorld030 = {
  text: getTexts('ITDW_030'),

  actions: [
    {
      id: 'ITDW_030_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        const { setDialog } = useDialogStore.getState()

        setDialog(FashionIntroduction)
      }
    }
  ]
} satisfies DialogType
