import { defaultTile } from '@/GameData/Zones/default.tile'

import { A1 } from '@/GameData/Zones/RootDomain/a1.tile'
import { A2 } from '@/GameData/Zones/RootDomain/a2.tile'
import { A3 } from '@/GameData/Zones/RootDomain/a3.tile'
import { A4 } from '@/GameData/Zones/RootDomain/a4.tile'
import { A5 } from '@/GameData/Zones/RootDomain/a5.tile'

export const RootDomain = {
  spawn: {
    x: 3,
    y: 3
  },

  grid: {
    1: {
      1: A1,
      2: A2,
      3: A3,
      4: A4,
      5: A5
    },

    2: {
      1: defaultTile,
      2: defaultTile,
      3: defaultTile,
      4: defaultTile,
      5: defaultTile
    },

    3: {
      1: defaultTile,
      2: defaultTile,
      3: defaultTile,
      4: defaultTile,
      5: defaultTile
    },

    4: {
      1: defaultTile,
      2: defaultTile,
      3: defaultTile,
      4: defaultTile,
      5: defaultTile
    },

    5: {
      1: defaultTile,
      2: defaultTile,
      3: defaultTile,
      4: defaultTile,
      5: defaultTile
    }
  }
}
