import type { MapType } from '@/Types/Zone.type'

import { grid } from '@/GameData/Zones/RootDomain/BedRoom/BedRoom.grid'
import { RootDomainBedRoomDressmonRoomTile } from '@/GameData/Zones/RootDomain/BedRoom/Tiles/Dressmon.tile'
import { RootDomainBedRoomGennaiRoomTile } from '@/GameData/Zones/RootDomain/BedRoom/Tiles/Gennai.tile'
import { RootDomainBedRoomWarpToCorridorRoomTile } from '@/GameData/Zones/RootDomain/BedRoom/Tiles/WarpToCorridor.tile'

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
