import {create} from 'zustand'

import type {CompositionType} from '@/Types/Composition.type'

type CompositionStore = {
  composition: CompositionType | null
  setComposition: (composition: CompositionType | null) => void
}

export const useCompositionStore = create<CompositionStore>((set) => ({
  composition: null,
  setComposition: (composition) => {
    set({ composition })
  }
}))
