import type { DungeonType } from '@/Types/Dungeon.type'

import { generateRandomNumber } from '@/Helpers/Math'
import { saveDungeon } from '@/Helpers/Systems/Dungeon'

export const enterDungeon = (dungeon: DungeonType) => {
  const { possibleRooms, unavailableRoomsAtFirstRoom } = dungeon

  const rooms = Object.keys(possibleRooms).filter(
    (roomId) => !unavailableRoomsAtFirstRoom.includes(roomId)
  )

  const rng = generateRandomNumber({
    min: 0,
    max: rooms.length - 1
  })

  const firstRoom = rooms[rng]

  saveDungeon({
    ...dungeon,
    rooms: [firstRoom],
    doneRooms: []
  })
}
