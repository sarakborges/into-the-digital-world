import type { NpcType } from '@/Types/Npc.type'

export type TileType = {
  npc: NpcType
  texture?: string

  canMove: {
    up?: boolean
    down?: boolean
    left?: boolean
    right?: boolean
  }
}
