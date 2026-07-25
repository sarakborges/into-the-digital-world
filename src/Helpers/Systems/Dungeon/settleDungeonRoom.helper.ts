import type { DungeonStoreType } from '@/Types/Dungeon.type'
import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { findDungeon } from '@/GameData/Registries/Dungeon.registry'

import { updateGameSession } from '@/Systems/Session/GameSession'

import { getDungeonRoomOptions } from '@/Helpers/Systems/Dungeon/getDungeonRoomOptions.helper'

import { useDungeonStore } from '@/Stores/Dungeon.store'

export type DungeonRoomSettlementResult =
  | 'nextRoom'
  | 'roomComplete'
  | 'invalid'

export type DungeonRoomSettlement = {
  dungeon: DungeonStoreType
  result: Exclude<DungeonRoomSettlementResult, 'invalid'>
}

export const getDungeonRoomSettlement = ({
  dungeon,
  party
}: {
  dungeon: DungeonStoreType
  party: Array<PartyDigimonType>
}): DungeonRoomSettlement | undefined => {
  const dungeonDefinition = findDungeon({
    zoneId: dungeon.zoneId,
    dungeonId: dungeon.dungeonId
  })
  const currentRoomId = dungeon.rooms.at(-1)
  const currentRoomIndex = dungeon.rooms.length - 1

  if (
    !dungeonDefinition ||
    !currentRoomId ||
    currentRoomIndex < 0 ||
    dungeon.doneRooms.length !== currentRoomIndex
  ) {
    return
  }

  const currentRoom = dungeonDefinition.possibleRooms[currentRoomId]

  if (!currentRoom) {
    return
  }

  const availableRooms =
    dungeon.rooms.length + 1 === dungeonDefinition.maxAmountOfRooms
      ? dungeonDefinition.availableLastRooms
      : currentRoom.branchesTo
  const currentRoomsOptions = availableRooms?.length
    ? getDungeonRoomOptions(availableRooms)
    : []

  if (availableRooms?.length && !currentRoomsOptions.length) {
    return
  }

  return {
    result: currentRoomsOptions.length ? 'nextRoom' : 'roomComplete',
    dungeon: {
      ...dungeon,
      currentRoomsOptions,
      doneRooms: [...dungeon.doneRooms, currentRoomId],
      party
    }
  }
}

export const settleDungeonRoom = (): DungeonRoomSettlementResult => {
  const dungeon = useDungeonStore.getState().dungeon

  if (!dungeon) {
    return 'invalid'
  }

  const settlement = getDungeonRoomSettlement({
    dungeon,
    party: dungeon.party
  })

  if (!settlement) {
    console.warn(
      `Unable to settle dungeon room for ${dungeon.zoneId}.${dungeon.dungeonId}.`
    )
    return 'invalid'
  }

  updateGameSession({ dungeon: settlement.dungeon })

  return settlement.result
}
