import type { GameType } from '@/Types/Game.type'
import type { SceneType } from '@/Types/Scene.type'
import type { NpcType } from '@/Types/Npc.type'

export type TileType = {
  npc?: NpcType
  texture?: string

  canMove: {
    up?: boolean
    down?: boolean
    left?: boolean
    right?: boolean
  }

  onEnter?: ({
    setGame,
    setScene
  }: {
    setGame: React.Dispatch<React.SetStateAction<GameType>>
    setScene: React.Dispatch<React.SetStateAction<SceneType | null>>
  }) => void
}
