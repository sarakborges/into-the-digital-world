import type { TileType } from '@/Types/Tile.type'

export const RootDomainY1X1: TileType = {
  texture: 'red',

  canMove: {
    up: false,
    down: true,
    left: false,
    right: true
  }
}
