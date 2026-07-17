import { grid } from './CoreChamber.grid'
import { GetStarterDigimonGennaiTile } from './Tiles/GetStarterDigimonGennai.tile'
import { RootDomainCoreChamberJijimonTile } from './Tiles/Jijimon.tile'
import { LocationGennaiTile } from './Tiles/LocationGennai.tile'
import { RootDomainCoreChamberNanomonTile } from './Tiles/Nanomon.tile'
import { RootDomainCoreChamberWarpToCorridorTile } from './Tiles/WarpToCorridor.tile'

import type { MapType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/Systems/Zones'

const gridSize = 19
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainCoreChamber: MapType = {
  id: `rootDomainCoreChamber`,
  background: `RootDomain/CoreChamber`,
  name: `Core Chamber`,
  gridSize,
  grid: filledGrid,

  tiles: [
    RootDomainCoreChamberWarpToCorridorTile,

    RootDomainCoreChamberNanomonTile,
    RootDomainCoreChamberJijimonTile,
    GetStarterDigimonGennaiTile,
    LocationGennaiTile
  ]
}
