import type { ProfileType } from '@/Types/Profile.type'
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
    setProfile,
    setScene
  }: {
    setProfile: React.Dispatch<React.SetStateAction<ProfileType | null>>
    setScene: React.Dispatch<React.SetStateAction<SceneType | null>>
  }) => void
}
