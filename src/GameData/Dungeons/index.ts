// Wild Zone
import { DungeonWildZoneKoromonNest } from './WildZone/KoromonNest'

import type { DungeonType } from '@/Types/Dungeon.type'

export const AllDungeons: {
  [zoneId: string]: {
    [dungeonId: string]: DungeonType
  }
} = {
  wildZone: {
    koromonNest: DungeonWildZoneKoromonNest
  }
}
