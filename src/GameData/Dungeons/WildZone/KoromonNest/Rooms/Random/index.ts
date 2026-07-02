import type { DungeonRoomType } from '@/Types/DungeonRoom.type'

import { WildZoneKoromon } from '@/GameData/Zones/WildZone/MainRoom/Enemies/Koromon.enemy'

export const DungeonWildZoneKoromonNestRoomRandom: DungeonRoomType = {
  name: 'DUNGEON_WILDZONE_KOROMON_NEST_ROOM_RANDOM_NAME',

  spawns: {
    min: 1,
    max: 2,

    digimons: WildZoneKoromon
  }
}
