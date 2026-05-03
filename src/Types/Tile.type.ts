import type { NpcType } from '@/Types/Npc.type'

export type TileType = {
  npc?: NpcType
  texture?: string

  onEnter?: (props: any) => void

  events?: {
    [k: string]: ({}: any) => void
  }
}
