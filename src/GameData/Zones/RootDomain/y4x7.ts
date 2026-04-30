import type { TileType } from '@/Types/Tile.type'
import type { ProfileType } from '@/Types/Profile.type'
import type { SceneType } from '@/Types/Scene.type'

import { BinaryForest } from '@/GameData/Zones/BinaryForest'

export const RootDomainY4X7: TileType = {
  texture: 'black',

  canMove: {
    up: true,
    down: true,
    left: true,
    right: true
  },

  onEnter: ({
    setProfile
  }: {
    setProfile: React.Dispatch<React.SetStateAction<ProfileType | null>>
    setScene: React.Dispatch<React.SetStateAction<SceneType | null>>
  }) => {
    if (!setProfile) {
      return
    }

    setProfile((prevProfile) => ({
      ...prevProfile!,
      currentZone: BinaryForest.id,
      currentX: 1
    }))
  }
}
