import { useDungeonStore } from '@/Stores/Dungeon.store'

import { DungeonWildZoneKoromonNest } from '@/GameData/Dungeons/WildZone/KoromonNest'

export const OpenDungeonKoromon = () => {
  const setDungeon = useDungeonStore.getState().setDungeon

  setDungeon({
    ...DungeonWildZoneKoromonNest,
    doneStages: []
  })
}
