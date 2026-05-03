import type { TileType } from '@/Types/Tile.type'

import { warpTo } from '@/Helpers/warpTo.helper'

import { RootDomainCorridor } from '@/GameData/Zones'

export const WarpToCorridor: TileType = {
  events: {
    onEnter: (props) => {
      const { profile, setProfile } = props

      warpTo({
        profile,
        setProfile,
        zoneId: RootDomainCorridor.id,
        x: 6,
        y: 8
      })
    }
  }
}
