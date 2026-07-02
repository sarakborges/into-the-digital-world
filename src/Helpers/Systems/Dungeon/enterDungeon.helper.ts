import type { DungeonType } from '@/Types/Dungeon.type'

import { generateRandomNumber } from '@/Helpers/Math'
import { saveDungeon } from '@/Helpers/Systems/Dungeon'

export const enterDungeon = (dungeon: DungeonType) => {
  const { availableFirstRooms } = dungeon

  const rng = generateRandomNumber({
    min: 0,
    max: availableFirstRooms.length - 1
  })

  const room = availableFirstRooms[rng]

  saveDungeon({
    dungeonId: dungeon.id,
    zoneId: dungeon.zone,
    rooms: [room],
    doneRooms: []
  })
}
