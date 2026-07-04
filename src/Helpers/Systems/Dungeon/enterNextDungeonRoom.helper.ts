import { AllDungeons } from '@/GameData/Dungeons'

import { generateRandomNumber } from '@/Helpers/Math'
import { saveDungeon } from '@/Helpers/Systems/Dungeon'
import { saveSession } from '@/Helpers/Systems/Data'
import { saveBattle } from '@/Helpers/Systems/Battle'

import { useSceneStore } from '@/Stores/Scene.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const enterNextDungeonRoom = () => {
  const { setScene } = useSceneStore.getState()
  const { profile } = useProfileStore.getState()
  const { battle } = useBattleStore.getState()
  const { dungeon } = useDungeonStore.getState()

  if (!dungeon || !battle || !profile) {
    return
  }

  const { rooms } = dungeon

  let nextRoomOptions: Array<string> = []

  const currentDungeon = AllDungeons[dungeon.zoneId][dungeon.dungeonId]
  const currentRoom = rooms[rooms.length - 1]
  const room = currentDungeon.possibleRooms[currentRoom]

  if (currentDungeon.maxAmountOfRooms === rooms.length + 1) {
    if (currentDungeon.availableLastRooms.length > 2) {
      for (let _ of new Array(2)) {
        nextRoomOptions.push(
          currentDungeon.availableLastRooms[
            generateRandomNumber({
              min: 0,
              max: currentDungeon.availableLastRooms.length - 1
            })
          ]
        )
      }
    }

    if (currentDungeon.availableLastRooms.length <= 2) {
      nextRoomOptions = [...currentDungeon.availableLastRooms]
    }
  } else {
    if (!room?.branchesTo) {
      return
    }

    if (room.branchesTo.length > 2) {
      for (let _ of new Array(2)) {
        nextRoomOptions.push(
          room.branchesTo[
            generateRandomNumber({
              min: 0,
              max: room.branchesTo.length - 1
            })
          ]
        )
      }
    }

    if (room.branchesTo.length <= 2) {
      nextRoomOptions = [...room.branchesTo]
    }
  }

  saveDungeon({
    ...dungeon,
    currentRoomsOptions: nextRoomOptions,

    doneRooms: [...dungeon.doneRooms, dungeon.rooms[dungeon.doneRooms.length]],

    party: battle.turnOrder.filter((digimon) => digimon.party === 'allies')
  })

  saveBattle(null)
  saveSession(profile)

  setScene({
    currentScene: 'dungeon',
    currentStage: 'chooseRoom'
  })
}
