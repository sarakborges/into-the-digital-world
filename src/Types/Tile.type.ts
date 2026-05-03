import type { NpcType } from '@/Types/Npc.type'

export type TileType = {
  npc?: NpcType
  texture?: string

  events?: {
    [k: string]: ({}: any) => void
  }
}
