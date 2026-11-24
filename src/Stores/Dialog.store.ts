import { create } from 'zustand'

import type { DialogType } from '@/Types/Dialog.type'

type DialogStore = {
  dialog: DialogType | null
  isTransitioning: boolean
  setDialog: (dialog: DialogType | null) => void
  setIsTransitioning: (isTransitioning: boolean) => void
}

export const useDialogStore = create<DialogStore>((set) => ({
  dialog: null,
  isTransitioning: false,
  setDialog: (dialog) => {
    set({
      dialog,
      isTransitioning: true
    })
  },
  setIsTransitioning: (isTransitioning) => {
    set({ isTransitioning })
  }
}))
