import type { GridType } from '@/Types/Grid.type'
import type { NpcType } from '@/Types/Npc.type'

export type ZoneType = {
  id: string
  background: string
  name: string
  gridSize?: number

  grid: GridType

  tiles: Array<{
    id: string
    x: number
    y: number
    defaultText?: string
    condition?: () => boolean

    onEnter?: {
      function: () => void
      eventText?: string
    }

    events?: Array<{
      function: () => void
      eventText?: string
      eventType?: 'default' | 'important'
    }>

    npc?: NpcType
  }>
}
