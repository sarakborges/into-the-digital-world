import type { ZoneType } from '@/Types/Zone.type'

import { defaultTile } from '@/GameData/Zones/default.tile'

import { RootDomainY5X5 } from './y5x5'
import { RootDomainY5X6 } from './y5x6'
import { RootDomainY5X7 } from './y5x7'
import { RootDomainY5X8 } from './y5x8'
import { RootDomainY5X9 } from './y5x9'

import { RootDomainY6X5 } from './y6x5'
import { RootDomainY6X9 } from './y6x9'

import { RootDomainY7X5 } from './y7x5'
import { RootDomainY7X6 } from './y7x6'
import { RootDomainY7X10 } from './y7x10'

import { RootDomainY8X5 } from './y8x5'
import { RootDomainY8X9 } from './y8x9'

import { RootDomainY9X5 } from './y9x5'
import { RootDomainY9X6 } from './y9x6'
import { RootDomainY9X7 } from './y9x7'
import { RootDomainY9X8 } from './y9x8'
import { RootDomainY9X9 } from './y9x9'

const grid = {
  5: {
    5: RootDomainY5X5,
    6: RootDomainY5X6,
    7: RootDomainY5X7,
    8: RootDomainY5X8,
    9: RootDomainY5X9
  },

  6: {
    5: RootDomainY6X5,
    6: { ...defaultTile },
    7: { ...defaultTile },
    8: { ...defaultTile },
    9: RootDomainY6X9
  },

  7: {
    5: RootDomainY7X5,
    6: RootDomainY7X6,
    7: { ...defaultTile },
    8: { ...defaultTile },
    9: { ...defaultTile },
    10: RootDomainY7X10
  },

  8: {
    5: RootDomainY8X5,
    6: { ...defaultTile },
    7: { ...defaultTile },
    8: { ...defaultTile },
    9: RootDomainY8X9
  },

  9: {
    5: RootDomainY9X5,
    6: RootDomainY9X6,
    7: RootDomainY9X7,
    8: RootDomainY9X8,
    9: RootDomainY9X9
  }
}

export const RootDomain: ZoneType = {
  id: `RootDomain`,
  name: `Root Domain`,
  gridSize: 19,
  grid
}
