import type { DungeonType } from '@/Types/Dungeon.type'

import { DungeonWildZoneKoromonNestRoomBoss } from '@/GameData/Dungeons/WildZone/KoromonNest/Rooms/Boss'
import { DungeonWildZoneKoromonNestRoomRandom } from '@/GameData/Dungeons/WildZone/KoromonNest/Rooms/Random'
import { DungeonWildZoneKoromonNestRoomRest } from '@/GameData/Dungeons/WildZone/KoromonNest/Rooms/Rest'

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
