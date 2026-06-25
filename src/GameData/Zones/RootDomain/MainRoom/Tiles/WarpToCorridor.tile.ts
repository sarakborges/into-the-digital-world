import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { WarpToCorridor } from '@/GameData/Zones/RootDomain/MainRoom/Events/WarpToCorridor.event'

export const RootDomainMainRoomWarpToCorridorTile: ZoneTileType = {
  id: 'rootDomainMainRoomWarpToCorridor',
  x: 9,
  y: 18,
  onEnter: {
    function: WarpToCorridor
  }
}
