import type { TileType } from '@/Types/Tile.type'

export const RootDomainY3X2: TileType = {
  texture: 'gray',

  canMove: {
    up: true,
    down: false,
    left: false,
    right: true
  }
}
