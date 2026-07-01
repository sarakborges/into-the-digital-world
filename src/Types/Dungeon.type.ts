import type { DungeonRoomType } from '@/Types/DungeonRoom.type'

export type DungeonType = {
  id: string
  name: string
  maxAmountOfStages: number

  spawnConditions?: () => boolean
  enterConditions?: () => boolean

  possibleStages: {
    [stageId: string]: DungeonRoomType
  }

  unavailableStagesAtFirstRoom: Array<string>
  unavailableStagesAtLastRoom: Array<string>
}

export type DungeonStoreType = DungeonType & {
  doneStages: Array<string>
}
