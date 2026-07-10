import type { MapTileType } from '@/Types/MapTile.type'

import { WarpToCorridor } from '@/GameData/Zones/RootDomain/BedRoom/Events/WarpToCorridor.event'

export const RootDomainBedRoomWarpToCorridorRoomTile: MapTileType = {
  id: 'rootDomainBedRoomWarpToCorridor',
  x: 6,
  y: 12,
  onEnter: {
    type: 'warp',
    function: WarpToCorridor
  }
}
