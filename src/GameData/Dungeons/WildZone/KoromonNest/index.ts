import type { DungeonType } from '@/Types/Dungeon.type'

import { DungeonWildZoneKoromonNestRoomRest } from './Rooms/Rest'
import { DungeonWildZoneKoromonNestRoomRandom } from './Rooms/Random'

export const DungeonWildZoneKoromonNest: DungeonType = {
  id: 'koromonNest',
  zone: 'wildZone',

  name: 'DUNGEON_WILDZONE_KOROMON_NEST_TITLE',
  maxAmountOfRooms: 3,

  possibleRooms: {
    rest: DungeonWildZoneKoromonNestRoomRest,
    random: DungeonWildZoneKoromonNestRoomRandom
  },

  availableFirstRooms: ['random'],
  availableLastRooms: []
}
