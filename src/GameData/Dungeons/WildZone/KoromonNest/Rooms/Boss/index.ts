import { WildZoneKoromon } from './Enemies/Koromon.enemy'

import type { DungeonRoomType } from '@/Types/DungeonRoom.type'

export const DungeonWildZoneKoromonNestRoomBoss: DungeonRoomType = {
  name: 'DUNGEON_WILDZONE_KOROMON_NEST_ROOM_BOSS_NAME',
  description: 'DUNGEON_WILDZONE_KOROMON_NEST_ROOM_BOSS_DESCRIPTION',
  type: 'battle',

  spawns: {
    min: 4,
    max: 4,

    digimons: WildZoneKoromon
  }
}
