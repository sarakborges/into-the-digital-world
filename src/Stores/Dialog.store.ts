import { create } from 'zustand'

import type { DialogType } from '@/Types/Dialog.type'

type DialogStore = {
  dialog: DialogType | null
  setDialog: (dialog: DialogType | null) => void
  patchDialog: (patchProps: Partial<DialogType>) => void
}

export const useDialogStore = create<DialogStore>((set) => ({
  dialog: null,
  setDialog: (dialog) => {
    set({ dialog })
  },
  patchDialog: (patchProps) => {
    set((state) => ({
      dialog: { ...state.dialog, ...patchProps }
    }))
  }
}))
