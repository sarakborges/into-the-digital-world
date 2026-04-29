import type { TileType } from '@/Types/Tile.type'

export const defaultTile: TileType = {
  texture: 'black',

  canMove: {
    up: true,
    down: true,
    left: true,
    right: true
  }
}
