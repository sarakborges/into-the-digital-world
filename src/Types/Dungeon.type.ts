import type { DungeonRoomType } from '@/Types/DungeonRoom.type'

export type DungeonType = {
  id: string
  maxAmountOfStages: number

  spawnConditions?: () => boolean
  enterConditions?: () => boolean

  possibleStages: {
    [stageId: string]: DungeonRoomType
  }

  unavailableStagesAtFirstRoom: Array<string>
  unavailableStagesAtLastRoom: Array<string>
}
