import type { ZoneType } from '@/Types/Zone.type'

import { RootDomainMainRoom } from '@/GameData/Zones'
import { warpTo } from '@/Helpers/warpTo.helper'

export const BinaryForest: ZoneType = {
  id: `BinaryForest`,
  name: `Binary Forest`,
  background: '',

  gridSize: 7,

  grid: {
    7: {
      5: {
        texture: 'white',

        onEnter: (props) => {
          const { profile, setProfile } = props

          warpTo({
            profile,
            setProfile,
            zoneId: RootDomainMainRoom.id,
            x: 9,
            y: 7
          })
        }
      }
    }
  }
}
