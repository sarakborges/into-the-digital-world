import type { TileType } from '@/Types/Tile.type'

export type ZoneType = {
  id: string
  name: string

  gridSize: {
    x: number
    y: number
  }

  grid: {
    [k: number]: {
      [k: number]: TileType
    }
  }
}
