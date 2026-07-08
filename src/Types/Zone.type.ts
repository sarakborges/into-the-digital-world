import type { ZoneTileType } from '@/Types/ZoneTile.type'
import type { GridType } from '@/Types/Grid.type'

export type ZoneType = {
  id: string
  background: string
  name: string
  gridSize?: number

  grid: GridType

  tiles: Array<ZoneTileType>
}
