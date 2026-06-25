import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { WarpToBedRoom } from '@/GameData/Zones/RootDomain/Corridor/Events/WarpToBedRoom.event'

export const RootDomainCorridorWarpToBedRoomTile: ZoneTileType = {
  id: 'rootDomainCorridorWarpToBedRoom',
  x: 4,
  y: 4,
  onEnter: {
    function: WarpToBedRoom
  }
}
