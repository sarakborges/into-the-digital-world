import type { ZoneType } from '@/Types/Zone.type'
import type { ProfileType } from '@/Types/Profile.type'
import type { SceneType } from '@/Types/Scene.type'

import { RootDomain } from '@/GameData/Zones/RootDomain'

export const BinaryForest: ZoneType = {
  id: `BinaryForest`,
  name: `Binary Forest`,

  gridSize: 7,

  grid: {
    7: {
      5: {
        texture: 'white',

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
            currentY: 7,
            currentX: 9
          }))
        }
      },

      6: {
        texture: 'gray',

        canMove: {
          up: true,
          down: true,
          left: true,
          right: true
        }
      }
    }
  }
}
