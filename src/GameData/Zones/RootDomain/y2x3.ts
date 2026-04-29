import type { TileType } from '@/Types/Tile.type'

export const RootDomainY2X3: TileType = {
  texture: 'gray',

  canMove: {
    up: false,
    down: true,
    left: true,
    right: true
  }
}
