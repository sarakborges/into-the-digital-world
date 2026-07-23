import type { DungeonStoreType } from '@/Types/Dungeon.type'

import { DungeonChooseRoom } from '@/GameData/Scenes/Apps/Dungeon/ChooseRoom.scene'

import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const saveDungeon = (dungeon: DungeonStoreType | null) => {
  try {
    const { setDungeon } = useDungeonStore.getState()
    const { setScene } = useSceneStore.getState()

    sessionStorage.setItem(`itdw_dungeon`, JSON.stringify(dungeon))

    setDungeon(dungeon)
    setScene({ component: DungeonChooseRoom })
  } catch (error) {
    console.warn(`Error saving dungeon: ${error}`)
    console.warn(dungeon)
  }
}
