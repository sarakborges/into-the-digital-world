import { create } from 'zustand'

import type { DialogType } from '@/Types/Dialog.type'

type DialogStore = {
  dialog: DialogType | null
  isTransitioning: boolean
  transitionId: number
  setDialog: (dialog: DialogType | null) => void
  setIsTransitioning: (isTransitioning: boolean) => void
}

export const useDialogStore = create<DialogStore>((set) => ({
  dialog: null,
  isTransitioning: false,
  transitionId: 0,
  setDialog: (dialog) => {
    set((state) => ({
      dialog,
      isTransitioning: !!dialog,
      transitionId: state.transitionId + 1
    }))
  },
  setIsTransitioning: (isTransitioning) => {
    set({ isTransitioning })
  }
}))
