import type { TileType } from '@/Types/Tile.type'

import { warpTo } from '@/Helpers/warpTo.helper'

import { RootDomainRestRoom1 } from '@/GameData/Zones'

export const WarpToRestRoom1: TileType = {
  events: {
    onEnter: (props) => {
      const { profile, setProfile } = props

      warpTo({
        profile,
        setProfile,
        zoneId: RootDomainRestRoom1.id,
        x: 9,
        y: 17
      })
    }
  }
}
