import type { DialogType } from '@/Types/Dialog.type'

import { useDialogStore } from '@/Stores/Dialog.store'
import { useGameStore } from '@/Stores/Game.store'

export const changeDialog = (dialog: DialogType | null) => {
  const { game } = useGameStore.getState()
  const { setDialog } = useDialogStore.getState()

  if (!game || !dialog) {
    return
  }

  setDialog(dialog)
}
