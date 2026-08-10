import type { NpcType } from '@/Types/Npc.type'

export type MapTileType = {
  id: string
  x: number
  y: number
  scene?: React.FC
  condition?: () => boolean

  onEnter?: {
    type?: 'warp'
    function: () => void
    condition?: () => boolean
  }

  npc?: NpcType
}
