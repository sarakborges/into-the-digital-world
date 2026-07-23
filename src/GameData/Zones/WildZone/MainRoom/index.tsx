import type { MapType } from '@/Types/Zone.type'

import { grid } from '@/GameData/Zones/WildZone/MainRoom/MainRoom.grid'
import { WildZoneGennaiTile } from '@/GameData/Zones/WildZone/MainRoom/Tiles/Gennai.tile'
import { WildZoneKoromonNestTile } from '@/GameData/Zones/WildZone/MainRoom/Tiles/KoromonNest.tile'

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
