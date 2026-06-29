import { useDungeonStore } from '@/Stores/Dungeon.store'

import { DungeonKoromonNest } from '@/GameData/Dungeons/WildZone/KoromonNest'

export const OpenDungeonKoromon = () => {
  const setDungeon = useDungeonStore.getState().setDungeon

  setDungeon(DungeonKoromonNest)
}
