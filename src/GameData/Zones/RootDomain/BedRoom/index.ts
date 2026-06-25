import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/Systems/Zones'
import { RootDomainBedRoomDressmonRoomTile } from './Tiles/Dressmon.tile'
import { RootDomainBedRoomWarpToCorridorRoomTile } from './Tiles/WarpToCorridor.tile'
import { RootDomainBedRoomGennaiRoomTile } from './Tiles/Gennai.tile'

import { grid } from './BedRoom.grid'

const gridSize = 13
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainBedRoom: ZoneType = {
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
