import type { TileType } from '@/Types/Tile.type'

export type GridType = {
  [k: number]: {
    [k: number]: TileType | null
  }
}
