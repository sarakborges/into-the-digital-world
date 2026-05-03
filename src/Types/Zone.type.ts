import type { GridType } from './Grid.type'

export type ZoneType = {
  id: string
  background: string
  name: string
  gridSize?: number

  grid: GridType
}
