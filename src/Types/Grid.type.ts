import type { TileType } from '@/Types/Tile.type'

export type GridType = {
  [y: number]: {
    [x: number]: TileType | null
  }
}
