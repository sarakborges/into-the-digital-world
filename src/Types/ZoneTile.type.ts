import type {NpcType} from '@/Types/Npc.type'

export type ZoneTileType = {
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
}
