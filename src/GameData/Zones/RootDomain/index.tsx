import type { ZoneType } from '@/Types/Zone.type'

import { defaultTile } from '@/GameData/Zones/default.tile'

import { RootDomainY1X1 } from './y1x1'
import { RootDomainY1X2 } from './y1x2'
import { RootDomainY1X3 } from './y1x3'
import { RootDomainY1X4 } from './y1x4'
import { RootDomainY1X5 } from './y1x5'
import { RootDomainY1X6 } from './y1x6'
import { RootDomainY1X7 } from './y1x7'

import { RootDomainY2X1 } from './y2x1'
import { RootDomainY2X2 } from './y2x2'
import { RootDomainY2X3 } from './y2x3'
import { RootDomainY2X4 } from './y2x4'
import { RootDomainY2X5 } from './y2x5'
import { RootDomainY2X6 } from './y2x6'
import { RootDomainY2X7 } from './y2x7'

import { RootDomainY3X1 } from './y3x1'
import { RootDomainY3X2 } from './y3x2'
import { RootDomainY3X6 } from './y3x6'
import { RootDomainY3X7 } from './y3x7'

import { RootDomainY4X1 } from './y4x1'
import { RootDomainY4X2 } from './y4x2'
import { RootDomainY4X3 } from './y4x3'
import { RootDomainY4X7 } from './y4x7'

import { RootDomainY5X1 } from './y5x1'
import { RootDomainY5X2 } from './y5x2'
import { RootDomainY5X6 } from './y5x6'
import { RootDomainY5X7 } from './y5x7'

import { RootDomainY6X1 } from './y6x1'
import { RootDomainY6X2 } from './y6x2'
import { RootDomainY6X3 } from './y6x3'
import { RootDomainY6X4 } from './y6x4'
import { RootDomainY6X5 } from './y6x5'
import { RootDomainY6X6 } from './y6x6'
import { RootDomainY6X7 } from './y6x7'

import { RootDomainY7X1 } from './y7x1'
import { RootDomainY7X2 } from './y7x2'
import { RootDomainY7X3 } from './y7x3'
import { RootDomainY7X4 } from './y7x4'
import { RootDomainY7X5 } from './y7x5'
import { RootDomainY7X6 } from './y7x6'
import { RootDomainY7X7 } from './y7x7'

const grid = {
  1: {
    1: RootDomainY1X1,
    2: RootDomainY1X2,
    3: RootDomainY1X3,
    4: RootDomainY1X4,
    5: RootDomainY1X5,
    6: RootDomainY1X6,
    7: RootDomainY1X7
  },

  2: {
    1: RootDomainY2X1,
    2: RootDomainY2X2,
    3: RootDomainY2X3,
    4: RootDomainY2X4,
    5: RootDomainY2X5,
    6: RootDomainY2X6,
    7: RootDomainY2X7
  },

  3: {
    1: RootDomainY3X1,
    2: RootDomainY3X2,
    3: defaultTile,
    4: defaultTile,
    5: defaultTile,
    6: RootDomainY3X6,
    7: RootDomainY3X7
  },

  4: {
    1: RootDomainY4X1,
    2: RootDomainY4X2,
    3: RootDomainY4X3,
    4: { ...defaultTile },
    5: { ...defaultTile },
    6: { ...defaultTile },
    7: RootDomainY4X7
  },

  5: {
    1: RootDomainY5X1,
    2: RootDomainY5X2,
    3: defaultTile,
    4: defaultTile,
    5: defaultTile,
    6: RootDomainY5X6,
    7: RootDomainY5X7
  },

  6: {
    1: RootDomainY6X1,
    2: RootDomainY6X2,
    3: RootDomainY6X3,
    4: RootDomainY6X4,
    5: RootDomainY6X5,
    6: RootDomainY6X6,
    7: RootDomainY6X7
  },

  7: {
    1: RootDomainY7X1,
    2: RootDomainY7X2,
    3: RootDomainY7X3,
    4: RootDomainY7X4,
    5: RootDomainY7X5,
    6: RootDomainY7X6,
    7: RootDomainY7X7
  }
}

export const RootDomain: ZoneType = {
  id: `RootDomain`,
  name: `Root Domain`,

  gridSize: {
    x: 7,
    y: 7
  },

  grid
}
