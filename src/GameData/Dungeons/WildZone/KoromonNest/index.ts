import type { DungeonType } from '@/Types/Dungeon.type'

import { DungeonWildZoneKoromonNestRoomRandom } from './Rooms/Random'
import { DungeonWildZoneKoromonNestRoomRest } from './Rooms/Rest'
import { DungeonWildZoneKoromonNestRoomBoss } from './Rooms/Boss'

export const DungeonWildZoneKoromonNest: DungeonType = {
  id: 'koromonNest',
  zone: 'wildZone',

  name: 'DUNGEON_WILDZONE_KOROMON_NEST_TITLE',
  maxAmountOfRooms: 3,

  possibleRooms: {
    rest: DungeonWildZoneKoromonNestRoomRest,
    random: DungeonWildZoneKoromonNestRoomRandom,
    boss: DungeonWildZoneKoromonNestRoomBoss
  },

  availableFirstRooms: ['random'],
  availableLastRooms: ['boss']
}
