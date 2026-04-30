import type { ZoneType } from '@/Types/Zone.type'
import type { ProfileType } from '@/Types/Profile.type'
import type { SceneType } from '@/Types/Scene.type'

import { defaultTile } from '@/GameData/Zones/default.tile'
import { RootDomain } from '@/GameData/Zones/RootDomain'

const defaultRow = {
  1: { ...defaultTile },
  2: { ...defaultTile },
  3: { ...defaultTile },
  4: { ...defaultTile },
  5: { ...defaultTile },
  6: { ...defaultTile },
  7: { ...defaultTile }
}

const defaultGrid = {
  1: { ...defaultRow },
  2: { ...defaultRow },
  3: { ...defaultRow },

  4: {
    1: {
      texture: 'black',

      canMove: {
        up: true,
        down: true,
        left: true,
        right: true
      },

      onEnter: ({
        setProfile,
        setScene
      }: {
        setProfile: React.Dispatch<React.SetStateAction<ProfileType | null>>
        setScene: React.Dispatch<React.SetStateAction<SceneType | null>>
      }) => {
        if (!setProfile) {
          return
        }

        setProfile?.((prevProfile) => ({
          ...prevProfile!,
          currentZone: RootDomain.id,
          currentX: 7
        }))
      }
    },

    2: { ...defaultTile },
    3: { ...defaultTile },
    4: { ...defaultTile },
    5: { ...defaultTile },
    6: { ...defaultTile },
    7: { ...defaultTile }
  },

  5: { ...defaultRow },
  6: { ...defaultRow },
  7: { ...defaultRow }
}

export const BinaryForest: ZoneType = {
  id: `BinaryForest`,
  name: `Binary Forest`,

  gridSize: {
    x: 7,
    y: 7
  },

  grid: defaultGrid
}
