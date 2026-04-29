import type { TileType } from '@/Types/Tile.type'

export const RootDomainY2X2: TileType = {
  texture: 'gray',

  canMove: {
    up: false,
    down: true,
    left: false,
    right: true
  }
}
