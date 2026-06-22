import type {TileType} from '@/Types/Tile.type'
import type {GridType} from '@/Types/Grid.type'

import {floorTile} from '@/GameData/Zones/floor.tile'

import {WildZoneKoromon} from './Enemies/Koromon.enemy'

const currentFloorTile: TileType = {
  ...floorTile,
  maxEnemies: 1,

  possibleSpawns: {
    ...WildZoneKoromon
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

export const grid: GridType = {
  1: { ...fullFloorRow },
  2: { ...fullFloorRow },
  3: { ...fullFloorRow },
  4: { ...fullFloorRow },
  5: { ...fullFloorRow },
  6: { ...fullFloorRow },
  7: { ...fullFloorRow },
  8: { ...fullFloorRow },
  9: { ...fullFloorRow },
  10: { ...fullFloorRow },
  11: { ...fullFloorRow },
  12: { ...fullFloorRow },
  13: { ...fullFloorRow },
  14: { ...fullFloorRow },
  15: { ...fullFloorRow },
  16: { ...fullFloorRow },
  17: { ...fullFloorRow }
}
