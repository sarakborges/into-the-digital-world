import type { GridType } from './Grid.type'
import type { NpcType } from './Npc.type'

export type ZoneType = {
  id: string
  background: string
  name: string
  gridSize?: number

  grid: GridType

  events?: {
    [k: string]: ({}: any) => void
  }

  tiles: Array<{
    x: number
    y: number
    event?: string
    npc?: NpcType
  }>
}
