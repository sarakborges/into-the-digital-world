import type { DungeonStoreType } from '@/Types/Dungeon.type'

import { useDungeonStore } from '@/Stores/Dungeon.store'

export const saveDungeon = (dungeon: DungeonStoreType | null) => {
  try {
    const { setDungeon } = useDungeonStore.getState()

    sessionStorage.setItem(`itdw_dungeon`, JSON.stringify(dungeon))

    setDungeon(dungeon)
  } catch (error) {
    console.warn(`Error saving dungeon: ${error}`)
    console.warn(dungeon)
  }
}
