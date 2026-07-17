import type { MapTileType } from '@/Types/MapTile.type'

import { WarpToCorridor } from '@/GameData/Zones/RootDomain/CoreChamber/Events/WarpToCorridor.event'

export const RootDomainCoreChamberWarpToCorridorTile: MapTileType = {
  id: 'rootDomainCoreChamberWarpToCorridor',
  x: 17,
  y: 17,
  onEnter: {
    type: 'warp',
    function: WarpToCorridor
  }
}
