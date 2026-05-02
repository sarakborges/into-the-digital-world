import type { TileType } from '@/Types/Tile.type'

import { warpTo } from '@/Helpers/warpTo.helper'

import { BinaryForest } from '@/GameData/Zones/BinaryForest'

export const RootDomainY7X12: TileType = {
  texture: 'white',

  onEnter: ({ setProfile }) => {
    warpTo({
      setProfile,
      zoneId: BinaryForest.id,
      x: 6,
      y: 7
    })
  }
}
