import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { WarpToMainRoom } from '@/GameData/Zones/RootDomain/Corridor/Events/WarpToMainRoom.event'

export const RootDomainCorridorWarpToMainRoomTile: ZoneTileType = {
  id: 'rootDomainCorridorWarpToMainRoom',
  x: 0,
  y: 6,
  onEnter: {
    function: WarpToMainRoom
  }
}
