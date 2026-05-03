import type { GridType } from '@/Types/Grid.type'
import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/fillGrid'

import { floorTile } from '@/GameData/Zones/floor.tile'

import { WarpToCorridor } from './WarpToCorridor.event'

const fullFloorRow = {
  1: floorTile,
  2: floorTile,
  3: floorTile,
  4: floorTile,
  5: floorTile,
  6: floorTile,
  7: floorTile,
  8: floorTile,
  9: floorTile,
  10: floorTile,
  11: floorTile,
  12: floorTile,
  13: floorTile,
  14: floorTile,
  15: floorTile,
  16: floorTile,
  17: floorTile
}

const grid: GridType = {
  8: { ...fullFloorRow },
  9: { ...fullFloorRow },
  10: { ...fullFloorRow },
  11: { ...fullFloorRow },

  14: {
    5: floorTile,
    6: floorTile,
    7: floorTile,
    8: floorTile,
    9: floorTile,
    10: floorTile,
    11: floorTile,
    12: floorTile,
    13: floorTile,
    14: floorTile,
    15: floorTile,
    16: floorTile
  },
  15: {
    8: floorTile,
    9: floorTile,
    10: floorTile
  },
  16: {
    9: floorTile
  }
}

const gridSize = 19
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainRestRoom1: ZoneType = {
  id: `RootDomainRestRoom1`,
  background: `RootDomain/RestRoomLeft`,
  name: `Root Domain`,
  gridSize,
  grid: filledGrid,

  events: {
    warpToCorridor: WarpToCorridor
  },

  tiles: [
    {
      x: 9,
      y: 17,
      event: 'warpToCorridor'
    }
  ]
}
