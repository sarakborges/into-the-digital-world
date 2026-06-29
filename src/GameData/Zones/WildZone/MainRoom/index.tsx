import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/Systems/Zones'

import { WildZoneGennaiTile } from './Tiles/Gennai.tile'
import { WildZoneKoromonNestTile } from './Tiles/KoromonNest.tile'

import { grid } from './MainRoom.grid'

const gridSize = 19
const filledGrid = fillGrid({ grid, gridSize })

export const WildZoneMainRoom: ZoneType = {
  id: `wildZoneMainRoom`,
  background: `WildZone/MainRoom`,
  name: `Wild Zone`,
  gridSize,
  grid: filledGrid,

  tiles: [WildZoneGennaiTile, WildZoneKoromonNestTile]
}
