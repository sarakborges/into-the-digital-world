import { AllDungeons } from '@/GameData/Dungeons'

import { generateRandomNumber } from '@/Helpers/Math'
import { saveDungeon } from '@/Helpers/Systems/Dungeon'
import { saveSession } from '@/Helpers/Systems/Data'
import { saveBattle } from '@/Helpers/Systems/Battle'

import { useSceneStore } from '@/Stores/Scene.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

const getNextRoomOptions = (roomIds: Array<string>) => {
  if (roomIds.length <= 2) {
    return [...roomIds]
  }

  const nextRoomOptions: Array<string> = []

  for (let _ of new Array(2)) {
    nextRoomOptions.push(
      roomIds[
        generateRandomNumber({
          min: 0,
          max: roomIds.length - 1
        })
      ]
    )
  }

  return nextRoomOptions
}

export const enterNextDungeonRoom = () => {
  const { setScene } = useSceneStore.getState()
  const { profile } = useProfileStore.getState()
  const { battle } = useBattleStore.getState()
  const { dungeon } = useDungeonStore.getState()

  if (!dungeon || !battle || !profile) {
    return
  }

  const { rooms } = dungeon
  const currentDungeon = AllDungeons[dungeon.zoneId][dungeon.dungeonId]
  const currentRoom = rooms[rooms.length - 1]
  const room = currentDungeon.possibleRooms[currentRoom]
  const shouldChooseLastRoom =
    currentDungeon.maxAmountOfRooms === rooms.length + 1

  const nextRoomOptions = shouldChooseLastRoom
    ? getNextRoomOptions(currentDungeon.availableLastRooms)
    : room?.branchesTo
      ? getNextRoomOptions(room.branchesTo)
      : undefined

  if (!nextRoomOptions) {
    return
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
