import type { DungeonType } from '@/Types/Dungeon.type'

import { generateRandomNumber } from '@/Helpers/Math'
import { saveDungeon } from '@/Helpers/Systems/Dungeon'

export const enterDungeon = (dungeon: DungeonType) => {
  const { availableFirstRooms, availableLastRooms, possibleRooms } = dungeon

  const firstRoom =
    availableFirstRooms[
      generateRandomNumber({
        min: 0,
        max: availableFirstRooms.length - 1
      })
    ]

  const lastRoom =
    availableLastRooms[
      generateRandomNumber({
        min: 0,
        max: availableLastRooms.length - 1
      })
    ]

  const middleRooms: Array<string> = []

  for (let _ of new Array(dungeon.maxAmountOfRooms - 2)) {
    if (!middleRooms.length) {
      const room =
        possibleRooms[firstRoom].branchesTo[
          generateRandomNumber({
            min: 0,
            max: possibleRooms[firstRoom].branchesTo.length - 1
          })
        ]

      middleRooms.push(room)

      continue
    }

    middleRooms.push(
      possibleRooms[middleRooms[middleRooms.length - 1]].branchesTo[
        generateRandomNumber({
          min: 0,
          max:
            possibleRooms[middleRooms[middleRooms.length - 1]].branchesTo
              .length - 1
        })
      ]
    )
  }

  saveDungeon({
    dungeonId: dungeon.id,
    zoneId: dungeon.zone,
    rooms: [firstRoom, ...middleRooms, lastRoom],
    doneRooms: []
  })
}
