import type { TileType } from '@/Types/Tile.type'

export type GridType = {
  [x: number]: {
    [y: number]: TileType | null
  }
}
