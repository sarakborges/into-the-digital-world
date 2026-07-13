import type { NpcType } from '@/Types/Npc.type'
import type { SceneType } from '@/Types/Scene.type'

export type MapTileType = {
  id: string
  x: number
  y: number
  scene?: SceneType
  condition?: () => boolean

  onEnter?: {
    type?: 'warp'
    function: () => void
    condition?: () => boolean
  }

  npc?: NpcType
}
