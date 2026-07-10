import type { MapTileType } from '@/Types/MapTile.type'

import { WarpToMainRoom } from '@/GameData/Zones/RootDomain/Corridor/Events/WarpToMainRoom.event'

export const RootDomainCorridorWarpToMainRoomTile: MapTileType = {
  id: 'rootDomainCorridorWarpToMainRoom',
  x: 1,
  y: 6,
  onEnter: {
    type: 'warp',
    function: WarpToMainRoom
  }
}
