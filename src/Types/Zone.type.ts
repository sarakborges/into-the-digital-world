import type { GridType } from '@/Types/Grid.type'
import type { MapTileType } from '@/Types/MapTile.type'

export type ZoneType = {
  name: string
  maps: {
    [key: string]: MapType
  }
}

export type MapType = {
  id: string
  background: string
  name: string
  gridSize?: number

  grid: GridType

  tiles: Array<MapTileType>
}
