import type { DungeonStoreType } from '@/Types/Dungeon.type'

import { AllScenes } from '@/GameData/Scenes'

import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const saveDungeon = (dungeon: DungeonStoreType | null) => {
  try {
    const { setDungeon } = useDungeonStore.getState()
    const { setScene } = useSceneStore.getState()

    sessionStorage.setItem(`itdw_dungeon`, JSON.stringify(dungeon))

    setDungeon(dungeon)
    setScene(AllScenes.dungeon.chooseRoom)
  } catch (error) {
    console.warn(`Error saving dungeon: ${error}`)
    console.warn(dungeon)
  }
}
