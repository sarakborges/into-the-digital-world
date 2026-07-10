import { grid } from './MainRoom.grid'
import { RootDomainMainRoomGennaiTile } from './Tiles/Gennai.tile'
import { RootDomainMainRoomJijimonTile } from './Tiles/Jijimon.tile'
import { RootDomainMainRoomNanomonTile } from './Tiles/Nanomon.tile'
import {
  RootDomainMainRoomWarpToCorridorTile1,
  RootDomainMainRoomWarpToCorridorTile2,
  RootDomainMainRoomWarpToCorridorTile3
} from './Tiles/WarpToCorridor.tile'

import type { MapType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/Systems/Zones'

const gridSize = 19
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainMainRoom: MapType = {
  id: `rootDomainMainRoom`,
  background: `RootDomain/MainRoom`,
  name: `Main Room`,
  gridSize,
  grid: filledGrid,

  tiles: [
    RootDomainMainRoomWarpToCorridorTile1,
    RootDomainMainRoomWarpToCorridorTile2,
    RootDomainMainRoomWarpToCorridorTile3,

    RootDomainMainRoomNanomonTile,
    RootDomainMainRoomJijimonTile,
    RootDomainMainRoomGennaiTile
  ]
}
