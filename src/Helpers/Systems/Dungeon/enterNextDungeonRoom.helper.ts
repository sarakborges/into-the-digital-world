import { getDungeon } from '@/GameData/Registries/Dungeon.registry'
import { DungeonChooseRoom } from '@/GameData/Scenes/Apps/Dungeon/ChooseRoom.scene'

import { saveBattle } from '@/Helpers/Systems/Battle/saveBattle.helper'
import { getDungeonRoomOptions } from '@/Helpers/Systems/Dungeon/getDungeonRoomOptions.helper'
import { saveDungeon } from '@/Helpers/Systems/Dungeon/saveDungeon.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const enterNextDungeonRoom = (): void => {
  const { setScene } = useSceneStore.getState()
  const { profile } = useProfileStore.getState()
  const { battle } = useBattleStore.getState()
  const { dungeon } = useDungeonStore.getState()

  if (!dungeon || !battle || !profile) {
    return
  }

  const { rooms } = dungeon
  const currentDungeon = getDungeon({
    zoneId: dungeon.zoneId,
    dungeonId: dungeon.dungeonId
  })
  const currentRoomId = rooms.at(-1)

  if (!currentRoomId) {
    return
  }

  const room = currentDungeon.possibleRooms[currentRoomId]
  const shouldChooseLastRoom =
    currentDungeon.maxAmountOfRooms === rooms.length + 1

  const nextRoomOptions = shouldChooseLastRoom
    ? getDungeonRoomOptions(currentDungeon.availableLastRooms)
    : room?.branchesTo
      ? getDungeonRoomOptions(room.branchesTo)
      : undefined

  if (!nextRoomOptions) {
    return
  }

  saveDungeon({
    ...dungeon,
    currentRoomsOptions: nextRoomOptions,
    doneRooms: [...dungeon.doneRooms, currentRoomId],
    party: battle.turnOrder.filter((digimon) => digimon.party === 'allies')
  })

  saveBattle(null)
  setScene({ component: DungeonChooseRoom })
}
