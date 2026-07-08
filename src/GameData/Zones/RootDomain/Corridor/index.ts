import { grid } from './Corridor.grid'
import { RootDomainCorridorWarpToBedRoomTile } from './Tiles/WarpToBedRoom.tile'
import { RootDomainCorridorWarpToMainRoomTile } from './Tiles/WarpToMainRoom.tile'

import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/Systems/Zones'

const gridSize = 13
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainCorridor: ZoneType = {
  id: `rootDomainCorridor`,
  background: `RootDomain/Corridor`,
  name: `Corridor`,
  gridSize,
  grid: filledGrid,

  tiles: [
    RootDomainCorridorWarpToMainRoomTile,
    RootDomainCorridorWarpToBedRoomTile
  ]
}
