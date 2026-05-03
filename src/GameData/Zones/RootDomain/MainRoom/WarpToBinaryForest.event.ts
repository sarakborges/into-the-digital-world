import type { TileType } from '@/Types/Tile.type'

import { warpTo } from '@/Helpers/warpTo.helper'

import { BinaryForest } from '@/GameData/Zones/BinaryForest'

export const WarpToBinaryForest: TileType = {
  onEnter: (props) => {
    const { profile, setProfile } = props

    warpTo({
      profile,
      setProfile,
      zoneId: BinaryForest.id,
      x: 6,
      y: 7
    })
  }
}
