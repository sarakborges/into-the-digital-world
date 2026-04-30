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

const outOfBoundsTile = {
  texture: 'black',

  canMove: {
    up: false,
    down: false,
    left: false,
    right: false
  }
}

const grid = {
  4: {
    4: RootDomainY1X1,
    5: RootDomainY1X2,
    6: RootDomainY1X3,
    7: RootDomainY1X4,
    8: RootDomainY1X5,
    9: RootDomainY1X6,
    10: RootDomainY1X7
  },

  5: {
    4: RootDomainY2X1,
    5: RootDomainY2X2,
    6: RootDomainY2X3,
    7: RootDomainY2X4,
    8: RootDomainY2X5,
    9: RootDomainY2X6,
    10: RootDomainY2X7
  },

  6: {
    4: RootDomainY3X1,
    5: RootDomainY3X2,
    6: defaultTile,
    7: defaultTile,
    8: defaultTile,
    9: RootDomainY3X6,
    10: RootDomainY3X7
  },

  7: {
    4: RootDomainY4X1,
    5: RootDomainY4X2,
    6: RootDomainY4X3,
    7: { ...defaultTile },
    8: { ...defaultTile },
    9: { ...defaultTile },
    10: RootDomainY4X7
  },

  8: {
    4: RootDomainY5X1,
    5: RootDomainY5X2,
    6: defaultTile,
    7: defaultTile,
    8: defaultTile,
    9: RootDomainY5X6,
    10: RootDomainY5X7
  },

  9: {
    4: RootDomainY6X1,
    5: RootDomainY6X2,
    6: RootDomainY6X3,
    7: RootDomainY6X4,
    8: RootDomainY6X5,
    9: RootDomainY6X6,
    10: RootDomainY6X7
  },

  10: {
    4: RootDomainY7X1,
    5: RootDomainY7X2,
    6: RootDomainY7X3,
    7: RootDomainY7X4,
    8: RootDomainY7X5,
    9: RootDomainY7X6,
    10: RootDomainY7X7
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
