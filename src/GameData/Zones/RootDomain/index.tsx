import type { GridType } from '@/Types/Grid.type'
import type { ZoneType } from '@/Types/Zone.type'

import { mergeZoneTiles } from '@/Helpers/mergeZoneTiles.helper'
import { fillGrid } from '@/Helpers/fillGrid'

import { floorTile } from '@/GameData/Zones/floor.tile'

import { AllNpcs } from '@/GameData/Npcs'

import { RootDomainWarpToBinaryForest } from './RootDomainWarpToBinaryForest.tile'

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

const coreRow = {
  1: floorTile,
  2: floorTile,
  3: floorTile,
  4: floorTile,
  5: floorTile,
  6: floorTile,
  12: floorTile,
  13: floorTile,
  14: floorTile,
  15: floorTile,
  16: floorTile,
  17: floorTile
}

const grid: GridType = {
  2: {
    1: floorTile,
    2: floorTile,
    3: floorTile,
    4: floorTile,
    5: floorTile,
    7: floorTile,
    11: floorTile,
    13: floorTile,
    14: floorTile,
    15: floorTile,
    16: floorTile,
    17: floorTile
  },

  3: {
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
    16: floorTile
  },

  4: { ...fullFloorRow },
  5: { ...fullFloorRow },
  6: { ...fullFloorRow },
  7: { ...coreRow },
  8: { ...coreRow },
  9: { ...coreRow },
  10: { ...coreRow },
  11: { ...coreRow },
  12: { ...fullFloorRow },
  13: { ...fullFloorRow },
  14: { ...fullFloorRow },

  15: {
    2: floorTile,
    3: floorTile,
    4: floorTile,
    6: floorTile,
    7: floorTile,
    8: floorTile,
    9: floorTile,
    10: floorTile,
    11: floorTile,
    12: floorTile,
    14: floorTile,
    15: floorTile,
    16: floorTile
  },

  16: { ...fullFloorRow },

  17: {
    8: floorTile,
    9: floorTile,
    10: floorTile
  }
}

const gridSize = 19
const filledGrid = fillGrid({ grid, gridSize })

const mergedGrid = mergeZoneTiles({
  grid: filledGrid,
  events: [
    {
      x: 9,
      y: 18,
      tile: RootDomainWarpToBinaryForest
    },

    {
      x: 9,
      y: 3,
      tile: { npc: AllNpcs.gennai }
    }
  ]
})

export const RootDomain: ZoneType = {
  id: `RootDomain`,
  name: `Root Domain`,
  gridSize,
  grid: mergedGrid
}
