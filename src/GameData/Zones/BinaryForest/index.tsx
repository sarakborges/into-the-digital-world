import type { ZoneType } from '@/Types/Zone.type'

import { RootDomainMainRoom } from '@/GameData/Zones'
import { warpTo } from '@/Helpers/warpTo.helper'

export const BinaryForest: ZoneType = {
  id: `BinaryForest`,
  name: `Binary Forest`,

  gridSize: 7,

  grid: {
    7: {
      5: {
        texture: 'white',

        onEnter: ({ setProfile }) => {
          warpTo({ setProfile, zoneId: RootDomainMainRoom.id, x: 9, y: 7 })
        }
      }
    }
  }
}
