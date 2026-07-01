import { DungeonWildZoneKoromonNest } from '@/GameData/Dungeons/WildZone/KoromonNest'

import { enterDungeon } from '@/Helpers/Systems/Dungeon'

export const OpenDungeonKoromon = () => {
  enterDungeon(DungeonWildZoneKoromonNest)
}
