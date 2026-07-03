import type { DungeonRoomType } from '@/Types/DungeonRoom.type'

import { WildZoneKoromon } from './Enemies/Koromon.enemy'

export const DungeonWildZoneKoromonNestRoomBoss: DungeonRoomType = {
  name: 'DUNGEON_WILDZONE_KOROMON_NEST_ROOM_BOSS_NAME',
  description: 'DUNGEON_WILDZONE_KOROMON_NEST_ROOM_BOSS_DESCRIPTION',

  spawns: {
    min: 4,
    max: 4,

    digimons: WildZoneKoromon
  }
}
