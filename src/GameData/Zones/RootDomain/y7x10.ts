import type { TileType } from '@/Types/Tile.type'
import type { ProfileType } from '@/Types/Profile.type'
import type { SceneType } from '@/Types/Scene.type'

import { BinaryForest } from '@/GameData/Zones/BinaryForest'

export const RootDomainY7X10: TileType = {
  texture: 'white',

  canMove: {
    up: false,
    down: false,
    left: true,
    right: false
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
      currentY: 7,
      currentX: 6
    }))
  }
}
