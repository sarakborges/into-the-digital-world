import type { DungeonType } from '@/Types/Dungeon.type'

import { generateRandomNumber } from '@/Helpers/Math'
import { saveDungeon } from '@/Helpers/Systems/Dungeon'
import { getCurrentParty } from '@/Helpers/Systems/Profile'

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
    if (!possibleRooms[firstRoom].branchesTo) {
      break
    }

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

    const lastRoom = middleRooms[middleRooms.length - 1]

    if (!possibleRooms[lastRoom].branchesTo) {
      return
    }

    const branches = possibleRooms[lastRoom].branchesTo

    middleRooms.push(
      branches[
        generateRandomNumber({
          min: 0,
          max: branches.length - 1
        })
      ]
    )
  }

  saveDungeon({
    dungeonId: dungeon.id,
    zoneId: dungeon.zone,
    rooms: [firstRoom, ...middleRooms, lastRoom],
    doneRooms: [],
    party: getCurrentParty()
  })
}
