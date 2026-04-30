import type { TileType } from '@/Types/Tile.type'

export type ZoneType = {
  id: string
  name: string
  gridSize?: number

  grid: {
    [k: number]: {
      [k: number]: TileType
    }
  }
}
