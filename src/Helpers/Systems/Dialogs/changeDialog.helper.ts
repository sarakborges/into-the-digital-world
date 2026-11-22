import type { DialogType } from '@/Types/Dialog.type'

import { saveProfile } from '@/Helpers/Systems/Profile'

import { useDialogStore } from '@/Stores/Dialog.store'
import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const changeDialog = (dialog: DialogType | null, persist?: boolean) => {
  const { game } = useGameStore.getState()
  const { setDialog } = useDialogStore.getState()

  if (!game || !dialog) {
    return
  }

  setDialog(dialog)

  if (!persist) {
    return
  }

  const { patchProfile } = useProfileStore.getState()

  patchProfile({
    currentDialog: dialog.parent
  })

  saveProfile()
}
