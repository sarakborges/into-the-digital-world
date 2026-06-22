import {create} from 'zustand'

import type {BattleType} from '@/Types/Battle.type'

type BattleStore = {
  battle: BattleType | null
  setBattle: (battle: BattleType | null) => void
}

export const useBattleStore = create<BattleStore>((set) => ({
  battle: null,
  setBattle: (battle) => {
    set({ battle })
  }
}))
