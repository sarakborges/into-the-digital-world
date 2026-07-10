import { grid } from './MainRoom.grid'
import { WildZoneGennaiTile } from './Tiles/Gennai.tile'
import { WildZoneKoromonNestTile } from './Tiles/KoromonNest.tile'

import type { MapType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/Systems/Zones'

const gridSize = 19
const filledGrid = fillGrid({ grid, gridSize })

export const WildZoneMainRoom: MapType = {
  id: `wildZoneMainRoom`,
  background: `WildZone/MainRoom`,
  name: `Wild Zone`,
  gridSize,
  grid: filledGrid,

  tiles: [WildZoneGennaiTile, WildZoneKoromonNestTile]
}
