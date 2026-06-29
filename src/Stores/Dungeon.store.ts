import { create } from 'zustand'

import type { DungeonType } from '@/Types/Dungeon.type'

type DungeonStore = {
  dungeon: DungeonType | null
  setDungeon: (dungeon: DungeonType | null) => void
}

export const useDungeonStore = create<DungeonStore>((set) => ({
  dungeon: null,
  setDungeon: (dungeon) => {
    set({ dungeon })
  }
}))
