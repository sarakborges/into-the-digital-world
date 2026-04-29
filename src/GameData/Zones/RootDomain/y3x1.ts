import type { TileType } from '@/Types/Tile.type'

export const RootDomainY3X1: TileType = {
  texture: 'red',

  canMove: {
    up: true,
    down: true,
    left: false,
    right: true
  }
}
