import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { WarpToCorridor } from '@/GameData/Zones/RootDomain/BedRoom/Events/WarpToCorridor.event'

export const RootDomainBedRoomWarpToCorridorRoomTile: ZoneTileType = {
  id: 'rootDomainBedRoomWarpToCorridor',
  x: 6,
  y: 12,
  onEnter: {
    function: WarpToCorridor
  }
}
