import type { TileType } from '@/Types/Tile.type'

export const RootDomainY1X3: TileType = {
  texture: 'red',

  canMove: {
    up: false,
    down: true,
    left: true,
    right: true
  }
}
