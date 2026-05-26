import type { TileType } from '@/Types/Tile.type'
import type { GridType } from '@/Types/Grid.type'

import { floorTile } from '@/GameData/Zones/floor.tile'
import { AllDigimons } from '@/GameData/Digimons'
import { AllItems } from '@/GameData/Items'

const currentFloorTile: TileType = {
  ...floorTile,
  maxEnemies: 1,

  possibleSpawns: {
    [AllDigimons.koromon.id]: {
      spawnChance: 100,

      lootTable: [
        {
          itemId: AllItems.koromonCore.id,
          dropChance: 100,
          amount: 1
        },

        {
          itemId: AllItems.koromonCore.id,
          dropChance: 100,
          amount: 1
        },

        {
          itemId: AllItems.koromonCore.id,
          dropChance: 100,
          amount: 1
        }
      ]
    }
  }
}

const fullFloorRow = {
  1: { ...currentFloorTile },
  2: { ...currentFloorTile },
  3: { ...currentFloorTile },
  4: { ...currentFloorTile },
  5: { ...currentFloorTile },
  6: { ...currentFloorTile },
  7: { ...currentFloorTile },
  8: { ...currentFloorTile },
  9: { ...currentFloorTile },
  10: { ...currentFloorTile },
  11: { ...currentFloorTile },
  12: { ...currentFloorTile },
  13: { ...currentFloorTile },
  14: { ...currentFloorTile },
  15: { ...currentFloorTile },
  16: { ...currentFloorTile },
  17: { ...currentFloorTile }
}

const coreRow = {
  1: { ...currentFloorTile },
  2: { ...currentFloorTile },
  3: { ...currentFloorTile },
  4: { ...currentFloorTile },
  5: { ...currentFloorTile },
  6: { ...currentFloorTile },
  12: { ...currentFloorTile },
  13: { ...currentFloorTile },
  14: { ...currentFloorTile },
  15: { ...currentFloorTile },
  16: { ...currentFloorTile },
  17: { ...currentFloorTile }
}

export const grid: GridType = {
  2: {
    1: { ...currentFloorTile },
    2: { ...currentFloorTile },
    3: { ...currentFloorTile },
    4: { ...currentFloorTile },
    5: { ...currentFloorTile },
    7: { ...currentFloorTile },
    11: { ...currentFloorTile },
    13: { ...currentFloorTile },
    14: { ...currentFloorTile },
    15: { ...currentFloorTile },
    16: { ...currentFloorTile },
    17: { ...currentFloorTile }
  },

  3: {
    2: { ...currentFloorTile },
    3: { ...currentFloorTile },
    4: { ...currentFloorTile },
    5: { ...currentFloorTile },
    6: { ...currentFloorTile },
    7: { ...currentFloorTile },
    8: { ...currentFloorTile },
    9: { ...currentFloorTile },
    10: { ...currentFloorTile },
    11: { ...currentFloorTile },
    12: { ...currentFloorTile },
    13: { ...currentFloorTile },
    14: { ...currentFloorTile },
    15: { ...currentFloorTile },
    16: { ...currentFloorTile }
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
    2: { ...currentFloorTile },
    3: { ...currentFloorTile },
    4: { ...currentFloorTile },
    6: { ...currentFloorTile },
    7: { ...currentFloorTile },
    8: { ...currentFloorTile },
    9: { ...currentFloorTile },
    10: { ...currentFloorTile },
    11: { ...currentFloorTile },
    12: { ...currentFloorTile },
    14: { ...currentFloorTile },
    15: { ...currentFloorTile },
    16: { ...currentFloorTile }
  },

  16: { ...fullFloorRow },

  17: {
    9: { ...currentFloorTile }
  }
}
