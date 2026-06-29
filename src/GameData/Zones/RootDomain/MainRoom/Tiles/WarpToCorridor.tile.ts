import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { WarpToCorridor } from '@/GameData/Zones/RootDomain/MainRoom/Events/WarpToCorridor.event'

const RootDomainMainRoomWarpToCorridorTile: ZoneTileType = {
  id: 'rootDomainMainRoomWarpToCorridor',
  x: 0,
  y: 18,
  onEnter: {
    type: 'warp',
    function: WarpToCorridor
  }
}

export const RootDomainMainRoomWarpToCorridorTile1: ZoneTileType = {
  ...RootDomainMainRoomWarpToCorridorTile,
  x: 9
}

export const RootDomainMainRoomWarpToCorridorTile2: ZoneTileType = {
  ...RootDomainMainRoomWarpToCorridorTile,
  x: 10
}

export const RootDomainMainRoomWarpToCorridorTile3: ZoneTileType = {
  ...RootDomainMainRoomWarpToCorridorTile,
  x: 11
}
