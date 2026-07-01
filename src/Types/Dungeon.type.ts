import type { DungeonRoomType } from '@/Types/DungeonRoom.type'

export type DungeonType = {
  name: string
  maxAmountOfRooms: number

  spawnConditions?: () => boolean
  enterConditions?: () => boolean

  possibleRooms: {
    [stageId: string]: DungeonRoomType
  }

  unavailableRoomsAtFirstRoom: Array<string>
  unavailableRoomsAtLastRoom: Array<string>
}

export type DungeonStoreType = DungeonType & {
  rooms: Array<string>
  doneRooms: Array<string>
}
