import type { DungeonRoomType } from '@/Types/DungeonRoom.type'

import { WildZoneKoromon } from './Enemies/Koromon.enemy'

export const DungeonWildZoneKoromonNestRoomRandom: DungeonRoomType = {
  name: 'DUNGEON_WILDZONE_KOROMON_NEST_ROOM_RANDOM_NAME',
  description: 'DUNGEON_WILDZONE_KOROMON_NEST_ROOM_RANDOM_DESCRIPTION',
  type: 'battle',

  branchesTo: ['random', 'rest'],

  spawns: {
    min: 1,
    max: 2,

    digimons: WildZoneKoromon
  }
}
