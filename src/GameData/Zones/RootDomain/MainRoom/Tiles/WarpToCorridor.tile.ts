import type { MapTileType } from '@/Types/MapTile.type'

import { WarpToCorridor } from '@/GameData/Zones/RootDomain/MainRoom/Events/WarpToCorridor.event'

const RootDomainMainRoomWarpToCorridorTile: MapTileType = {
  id: 'rootDomainMainRoomWarpToCorridor',
  x: 0,
  y: 18,
  onEnter: {
    type: 'warp',
    function: WarpToCorridor
  }
}

export const RootDomainMainRoomWarpToCorridorTile1: MapTileType = {
  ...RootDomainMainRoomWarpToCorridorTile,
  x: 9
}

export const RootDomainMainRoomWarpToCorridorTile2: MapTileType = {
  ...RootDomainMainRoomWarpToCorridorTile,
  x: 10
}

export const RootDomainMainRoomWarpToCorridorTile3: MapTileType = {
  ...RootDomainMainRoomWarpToCorridorTile,
  x: 11
}
