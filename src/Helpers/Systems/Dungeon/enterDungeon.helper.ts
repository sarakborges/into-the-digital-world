import type { DungeonType } from '@/Types/Dungeon.type'

import { generateRandomNumber } from '@/Helpers/Math'
import { saveDungeon } from '@/Helpers/Systems/Dungeon'
import { getCurrentParty } from '@/Helpers/Systems/Profile'

export const enterDungeon = (dungeon: DungeonType) => {
  const { availableFirstRooms } = dungeon

  let firstRoomOptions: Array<string> = []

  if (availableFirstRooms.length > 2) {
    for (let i = 0; i < 2; i++) {
      const randomIndex = generateRandomNumber({
        min: 0,
        max: availableFirstRooms.length - 1
      })
      firstRoomOptions.push(availableFirstRooms[randomIndex])
    }
  }

  if (availableFirstRooms.length <= 2) {
    firstRoomOptions = [...availableFirstRooms]
  }

  saveDungeon({
    dungeonId: dungeon.id,
    zoneId: dungeon.zone,
    rooms: [],
    doneRooms: [],
    party: getCurrentParty(),
    currentRoomsOptions: firstRoomOptions
  })
}
