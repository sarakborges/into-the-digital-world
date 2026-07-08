import type { DungeonType } from '@/Types/Dungeon.type'

import { getCurrentParty } from '@/Helpers/Systems/Profile'
import { saveDungeon } from '@/Helpers/Systems/Dungeon'
import { generateRandomNumber } from '@/Helpers/Math'

export const enterDungeon = (dungeon: DungeonType) => {
  const { availableFirstRooms } = dungeon

  let firstRoomOptions: Array<string> = []

  if (availableFirstRooms.length > 2) {
    for (let _ of new Array(2)) {
      firstRoomOptions.push(
        availableFirstRooms[
          generateRandomNumber({
            min: 0,
            max: availableFirstRooms.length - 1
          })
        ]
      )
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
