import type { ZoneType } from '@/Types/Zone.type'

import { floorTile } from '@/GameData/Zones/floor.tile'

import { RootDomainY7X5 } from './y7x5'
import { RootDomainY7X12 } from './y7x12'

const grid = {
  5: {
    5: floorTile,
    6: floorTile,
    7: floorTile,
    8: floorTile,
    9: floorTile
  },

  6: {
    5: floorTile,
    9: floorTile
  },

  7: {
    5: RootDomainY7X5,
    9: floorTile,
    12: RootDomainY7X12
  },

  8: {
    5: floorTile,
    9: floorTile
  },

  9: {
    5: floorTile,
    6: floorTile,
    7: floorTile,
    8: floorTile,
    9: floorTile
  }
}

export const RootDomain: ZoneType = {
  id: `RootDomain`,
  name: `Root Domain`,
  gridSize: 19,
  grid
}
