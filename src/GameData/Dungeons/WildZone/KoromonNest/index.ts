import type { DungeonType } from '@/Types/Dungeon.type'

export const DungeonKoromonNest: DungeonType = {
  id: 'koromonNest',
  maxAmountOfStages: 3,

  possibleStages: {},

  unavailableStagesAtFirstRoom: [],
  unavailableStagesAtLastRoom: []
}
