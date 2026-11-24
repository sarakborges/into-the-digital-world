import type { DialogType } from '@/Types/Dialog.type'

import { useDialogStore } from '@/Stores/Dialog.store'
import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const changeDialog = (dialog: DialogType | null) => {
  const { game, isTransitioning: isGameTransitioning } =
    useGameStore.getState()
  const { isTransitioning, setDialog } = useDialogStore.getState()
  const { patchProfile } = useProfileStore.getState()

  if (!game || isGameTransitioning || !dialog || isTransitioning) {
    return
  }

  setDialog(dialog)

  patchProfile({
    currentDialog: dialog.parent
  })
}
