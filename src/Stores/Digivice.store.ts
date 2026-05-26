import type { DigiviceType } from '@/Types/Digivice.type'

import { create } from 'zustand'

type DigiviceStore = {
  digivice: DigiviceType | null
  setDigivice: (digivice: DigiviceType | null) => void
}

export const useDigiviceStore = create<DigiviceStore>((set) => ({
  digivice: null,

  setDigivice: (digivice) => {
    set({ digivice })
  }
}))
