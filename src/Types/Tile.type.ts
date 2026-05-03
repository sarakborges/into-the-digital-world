import type { ProfileType } from '@/Types/Profile.type'
import type { SceneType } from '@/Types/Scene.type'
import type { NpcType } from '@/Types/Npc.type'

export type TileType = {
  npc?: NpcType
  texture?: string

  onEnter?: ({
    setProfile,
    setScene
  }: {
    setProfile: React.Dispatch<React.SetStateAction<ProfileType | null>>
    setScene: React.Dispatch<React.SetStateAction<SceneType | null>>
  }) => void

  events?: {
    [k: string]: ({}: any) => void
  }
}
