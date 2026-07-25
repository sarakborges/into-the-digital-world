import { create } from 'zustand'

import type { DigiviceType } from '@/Types/Digivice.type'

const createInitialDigivice = (): DigiviceType => ({ isOpen: false })

type DigiviceStore = {
  digivice: DigiviceType | null
  setDigivice: (digivice: DigiviceType | null) => void
  resetDigivice: () => void
}

export const useDigiviceStore = create<DigiviceStore>((set) => ({
  digivice: createInitialDigivice(),

  setDigivice: (digivice) => {
    set({ digivice })
  },

  resetDigivice: () => {
    set({ digivice: createInitialDigivice() })
  }
}))
