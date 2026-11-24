import type { DialogType } from '@/Types/Dialog.type'

import { useDialogStore } from '@/Stores/Dialog.store'
import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const changeDialog = (dialog: DialogType | null) => {
  const { game, setGame } = useGameStore.getState()
  const { patchProfile } = useProfileStore.getState()
  const { setDialog } = useDialogStore.getState()

  if (!dialog) {
    return
  }

  setGame({
    ...game,
    isTransitioning: false
  })

  patchProfile({
    currentDialog: dialog.parent
  })

  setDialog(dialog)
}
