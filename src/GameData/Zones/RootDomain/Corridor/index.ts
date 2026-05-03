import type { GridType } from '@/Types/Grid.type'
import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/fillGrid'

import { floorTile } from '@/GameData/Zones/floor.tile'

import { WarpToMainRoom } from './WarpToMainRoom.event'
import { WarpToRestRoom1 } from './WarpToRestRoom1.event'

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
  11: { ...fullFloorRow }
}

const gridSize = 19
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainCorridor: ZoneType = {
  id: `RootDomainCorridor`,
  background: `RootDomain/Corridor`,
  name: `Root Domain`,
  gridSize,
  grid: filledGrid,

  events: {
    warpToMainRoom: WarpToMainRoom,
    warpToRestRoom1: WarpToRestRoom1
  },

  tiles: [
    {
      x: 1,
      y: 9,
      event: 'warpToMainRoom'
    },

    {
      x: 6,
      y: 7,
      event: 'warpToRestRoom1'
    }
  ]
}
