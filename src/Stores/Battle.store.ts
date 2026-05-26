import type { BattleType } from '@/Types/Battle.type'

import { create } from 'zustand'

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
