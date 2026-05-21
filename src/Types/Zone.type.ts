import type { GridType } from '@/Types/Grid.type'
import type { NpcType } from '@/Types/Npc.type'

export type ZoneType = {
  id: string
  background: string
  name: string
  gridSize?: number

  grid: GridType

  events?: {
    [eventId: string]: ({}: any) => void
  }

  tiles: Array<{
    x: number
    y: number
    condition?: boolean

    event?: string
    npc?: NpcType
  }>
}
