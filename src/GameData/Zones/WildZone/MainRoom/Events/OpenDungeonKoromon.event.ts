import { saveDungeon } from '@/Helpers/Systems/Dungeon'

import { DungeonWildZoneKoromonNest } from '@/GameData/Dungeons/WildZone/KoromonNest'

export const OpenDungeonKoromon = () => {
  saveDungeon({
    ...DungeonWildZoneKoromonNest,
    doneStages: []
  })
}
