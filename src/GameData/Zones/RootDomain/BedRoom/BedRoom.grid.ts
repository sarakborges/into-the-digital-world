import type { GridType } from '@/Types/Grid.type'

import { floorTile } from '@/GameData/Zones/floor.tile'

const fullFloorRow = {
  1: { ...floorTile },
  2: { ...floorTile },
  3: { ...floorTile },
  4: { ...floorTile },
  5: { ...floorTile },
  6: { ...floorTile },
  7: { ...floorTile },
  8: { ...floorTile },
  9: { ...floorTile },
  10: { ...floorTile }
}

export const grid: GridType = {
  2: {
    1: { ...floorTile },
    2: { ...floorTile },
    10: { ...floorTile },
    11: { ...floorTile }
  },

  3: {
    1: { ...floorTile },
    2: { ...floorTile },
    3: { ...floorTile },
    4: { ...floorTile },
    5: { ...floorTile },
    6: { ...floorTile },
    7: { ...floorTile },
    8: { ...floorTile },
    9: { ...floorTile },
    10: { ...floorTile },
    11: { ...floorTile }
  },

  4: { ...fullFloorRow },

  5: {
    3: { ...floorTile },
    4: { ...floorTile },
    5: { ...floorTile },
    6: { ...floorTile },
    7: { ...floorTile },
    8: { ...floorTile },
    9: { ...floorTile },
    10: { ...floorTile }
  },

  6: { ...fullFloorRow },
  7: { ...fullFloorRow },

  8: {
    3: { ...floorTile },
    4: { ...floorTile },
    5: { ...floorTile },
    6: { ...floorTile },
    7: { ...floorTile },
    8: { ...floorTile },
    9: { ...floorTile },
    10: { ...floorTile },
    11: { ...floorTile }
  },

  9: {
    4: { ...floorTile },
    5: { ...floorTile },
    6: { ...floorTile },
    7: { ...floorTile },
    8: { ...floorTile },
    9: { ...floorTile },
    10: { ...floorTile },
    11: { ...floorTile }
  },

  10: {
    4: { ...floorTile },
    5: { ...floorTile },
    6: { ...floorTile },
    7: { ...floorTile },
    8: { ...floorTile },
    9: { ...floorTile },
    10: { ...floorTile },
    11: { ...floorTile }
  },

  11: {
    6: { ...floorTile }
  }
}
