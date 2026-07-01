// Wild Zone
import type { DungeonType } from '@/Types/Dungeon.type'

import { DungeonWildZoneKoromonNest } from './WildZone/KoromonNest'

export const AllDungeons: {
  [zoneId: string]: {
    [dungeonId: string]: DungeonType
  }
} = {
  wildZone: {
    koromonNest: DungeonWildZoneKoromonNest
  }
}
