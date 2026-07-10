import { grid } from './BedRoom.grid'
import { RootDomainBedRoomDressmonRoomTile } from './Tiles/Dressmon.tile'
import { RootDomainBedRoomGennaiRoomTile } from './Tiles/Gennai.tile'
import { RootDomainBedRoomWarpToCorridorRoomTile } from './Tiles/WarpToCorridor.tile'

import type { MapType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/Systems/Zones'

const gridSize = 13
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainBedRoom: MapType = {
  id: `rootDomainBedRoom`,
  background: `RootDomain/BedRoom`,
  name: `Bed Room`,
  gridSize,
  grid: filledGrid,

  tiles: [
    RootDomainBedRoomWarpToCorridorRoomTile,

    RootDomainBedRoomGennaiRoomTile,
    RootDomainBedRoomDressmonRoomTile
  ]
}
