import type { MapTileType } from '@/Types/MapTile.type'

import { WarpToBedRoom } from '@/GameData/Zones/RootDomain/Corridor/Events/WarpToBedRoom.event'

export const RootDomainCorridorWarpToBedRoomTile: MapTileType = {
  id: 'rootDomainCorridorWarpToBedRoom',
  x: 4,
  y: 4,
  onEnter: {
    type: 'warp',
    function: WarpToBedRoom
  }
}
