import type { TileType } from '@/Types/Tile.type'

export const RootDomainY5X5: TileType = {
  texture: 'gray',

  canMove: {
    up: false,
    down: true,
    left: false,
    right: true
  }
}
