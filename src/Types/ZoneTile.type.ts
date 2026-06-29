import type { NpcType } from '@/Types/Npc.type'

export type ZoneTileType = {
  id: string
  x: number
  y: number
  defaultText?: string
  condition?: () => boolean

  onEnter?: {
    eventText?: string
    type?: 'warp'
    function: () => void
    condition?: () => boolean
  }

  events?: Array<{
    eventText?: string
    eventType?: 'default' | 'important' | 'dungeon'
    function: () => void
    condition?: () => boolean
  }>

  npc?: NpcType
}
