import type { GridType } from './Grid.type'

export type ZoneType = {
  id: string
  name: string
  gridSize?: number

  grid: GridType
}
