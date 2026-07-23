import type { DungeonRoomType } from '@/Types/DungeonRoom.type'

import KoromonBoss1xEncounter from '@/GameData/Dungeons/WildZone/KoromonNest/Encounters/KoromonBoss1x.encounter'

export const DungeonWildZoneKoromonNestRoomBoss: DungeonRoomType = {
  name: 'DUNGEON_WILDZONE_KOROMON_NEST_ROOM_BOSS_NAME',
  description: 'DUNGEON_WILDZONE_KOROMON_NEST_ROOM_BOSS_DESCRIPTION',
  type: 'battle',

  encounters: [KoromonBoss1xEncounter]
}
