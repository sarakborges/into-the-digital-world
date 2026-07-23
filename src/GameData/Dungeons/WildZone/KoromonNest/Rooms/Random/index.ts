import type { DungeonRoomType } from '@/Types/DungeonRoom.type'

import Koromon1xDorimon1xEncounter from '@/GameData/Dungeons/WildZone/KoromonNest/Encounters/Koromon1x-Dorimon1x.encounter'
import Koromon1xEncounter from '@/GameData/Dungeons/WildZone/KoromonNest/Encounters/Koromon1x.encounter'
import Koromon2xDorimon2xEncounter from '@/GameData/Dungeons/WildZone/KoromonNest/Encounters/Koromon2x-Dorimon2x.encounter'

export const DungeonWildZoneKoromonNestRoomRandom: DungeonRoomType = {
  name: 'DUNGEON_WILDZONE_KOROMON_NEST_ROOM_RANDOM_NAME',
  description: 'DUNGEON_WILDZONE_KOROMON_NEST_ROOM_RANDOM_DESCRIPTION',
  type: 'battle',

  branchesTo: ['random', 'rest'],

  encounters: [
    Koromon2xDorimon2xEncounter,
    Koromon1xDorimon1xEncounter,
    Koromon1xEncounter
  ]
}
