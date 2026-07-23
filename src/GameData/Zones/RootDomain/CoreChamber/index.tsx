import type { MapType } from '@/Types/Zone.type'

import { grid } from '@/GameData/Zones/RootDomain/CoreChamber/CoreChamber.grid'
import { GetStarterDigimonGennaiTile } from '@/GameData/Zones/RootDomain/CoreChamber/Tiles/GetStarterDigimonGennai.tile'
import { RootDomainCoreChamberJijimonTile } from '@/GameData/Zones/RootDomain/CoreChamber/Tiles/Jijimon.tile'
import { LocationGennaiTile } from '@/GameData/Zones/RootDomain/CoreChamber/Tiles/LocationGennai.tile'
import { RootDomainCoreChamberNanomonTile } from '@/GameData/Zones/RootDomain/CoreChamber/Tiles/Nanomon.tile'
import { RootDomainCoreChamberWarpToCorridorTile } from '@/GameData/Zones/RootDomain/CoreChamber/Tiles/WarpToCorridor.tile'

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
