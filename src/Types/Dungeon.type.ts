import type { DungeonRoomType } from '@/Types/DungeonRoom.type'

export type DungeonType = {
  id: string
  zone: string
  name: string
  maxAmountOfRooms: number

  spawnConditions?: () => boolean
  enterConditions?: () => boolean

  possibleRooms: {
    [roomId: string]: DungeonRoomType
  }

  availableFirstRooms: Array<string>
  availableLastRooms: Array<string>
}

export type DungeonStoreType = {
  dungeonId: string
  zoneId: string
  rooms: Array<string>
  doneRooms: Array<string>
}
