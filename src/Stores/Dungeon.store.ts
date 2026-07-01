import { create } from 'zustand'

import type { DungeonStoreType } from '@/Types/Dungeon.type'

type DungeonStore = {
  dungeon: DungeonStoreType | null
  setDungeon: (dungeon: DungeonStoreType | null) => void
}

export const useDungeonStore = create<DungeonStore>((set) => ({
  dungeon: null,
  setDungeon: (dungeon) => {
    set({ dungeon })
  }
}))
