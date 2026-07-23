import type { MapType } from '@/Types/Zone.type'

import { grid } from '@/GameData/Zones/RootDomain/Corridor/Corridor.grid'
import { RootDomainCorridorWarpToBedRoomTile } from '@/GameData/Zones/RootDomain/Corridor/Tiles/WarpToBedRoom.tile'
import { RootDomainCorridorWarpToCoreChamberTile } from '@/GameData/Zones/RootDomain/Corridor/Tiles/WarpToCoreChamber.tile'

import { fillGrid } from '@/Helpers/Systems/Zones'

const gridSize = 11
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainCorridor: MapType = {
  id: `rootDomainCorridor`,
  background: `RootDomain/Corridor`,
  name: `Corridor`,
  gridSize,
  grid: filledGrid,

  tiles: [
    RootDomainCorridorWarpToCoreChamberTile,
    RootDomainCorridorWarpToBedRoomTile
  ]
}
