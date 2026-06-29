import type { NpcType } from '@/Types/Npc.type'

export type ZoneTileType = {
  id: string
  x: number
  y: number
  defaultText?: string
  hideFromMap?: boolean
  condition?: () => boolean

  onEnter?: {
    eventText?: string
    function: () => void
    condition?: () => boolean
  }

  events?: Array<{
    eventText?: string
    eventType?: 'default' | 'important'
    function: () => void
    condition?: () => boolean
  }>

  npc?: NpcType
}
