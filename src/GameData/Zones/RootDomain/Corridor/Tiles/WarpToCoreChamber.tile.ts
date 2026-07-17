import type { MapTileType } from '@/Types/MapTile.type'

import { WarpToCoreChamber } from '@/GameData/Zones/RootDomain/Corridor/Events/WarpToCoreChamber.event'

export const RootDomainCorridorWarpToCoreChamberTile: MapTileType = {
  id: 'rootDomainCorridorWarpToCoreChamber',
  x: 1,
  y: 6,
  onEnter: {
    type: 'warp',
    function: WarpToCoreChamber
  }
}
