import type { ResolvedBattleType } from '@/Types/Battle.type'
import type { DungeonStoreType } from '@/Types/Dungeon.type'
import type { ProfileType } from '@/Types/Profile.type'

import { findDungeon } from '@/GameData/Registries/Dungeon.registry'

import { updateGameSession } from '@/Systems/Session/GameSession'

import { getDungeonRoomOptions } from '@/Helpers/Systems/Dungeon/getDungeonRoomOptions.helper'
import { applyItemAmounts } from '@/Helpers/Systems/Profile/applyItemAmounts.helper'
import { warpTo } from '@/Helpers/Systems/Zones/warpTo.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

export type BattleSettlementResult =
  | 'nextRoom'
  | 'dungeonComplete'
  | 'defeat'
  | 'invalid'

const getDungeonAfterVictory = ({
  battle,
  dungeon
}: {
  battle: ResolvedBattleType
  dungeon: DungeonStoreType
}): DungeonStoreType | null | undefined => {
  const dungeonDefinition = findDungeon({
    zoneId: dungeon.zoneId,
    dungeonId: dungeon.dungeonId
  })
  const currentRoomId = dungeon.rooms.at(-1)

  if (!dungeonDefinition || !currentRoomId) {
    return undefined
  }

  const currentRoom = dungeonDefinition.possibleRooms[currentRoomId]

  if (
    !currentRoom ||
    dungeon.rooms.length > dungeonDefinition.maxAmountOfRooms
  ) {
    return undefined
  }

  if (dungeon.rooms.length === dungeonDefinition.maxAmountOfRooms) {
    return null
  }

  const availableRooms =
    dungeon.rooms.length + 1 === dungeonDefinition.maxAmountOfRooms
      ? dungeonDefinition.availableLastRooms
      : currentRoom?.branchesTo

  if (!availableRooms?.length) {
    return undefined
  }

  const currentRoomsOptions = getDungeonRoomOptions(availableRooms)

  if (!currentRoomsOptions.length) {
    return undefined
  }

  return {
    ...dungeon,
    currentRoomsOptions,
    doneRooms: [...dungeon.doneRooms, currentRoomId],
    party: battle.turnOrder.filter((digimon) => digimon.party === 'allies')
  }
}

export const settleBattle = (
  battle: ResolvedBattleType
): BattleSettlementResult => {
  const currentBattle = useBattleStore.getState().battle
  const dungeon = useDungeonStore.getState().dungeon
  const profile = useProfileStore.getState().profile

  if (currentBattle !== battle || !dungeon || !profile) {
    return 'invalid'
  }

  if (battle.result === 'defeat') {
    updateGameSession({ dungeon: null, battle: null })

    warpTo({
      x: 3,
      y: 5,
      zone: 'rootDomain',
      map: 'restRoom'
    })

    return 'defeat'
  }

  const updatedDungeon = getDungeonAfterVictory({ battle, dungeon })

  if (updatedDungeon === undefined) {
    console.warn(
      `Unable to settle battle for dungeon ${dungeon.zoneId}.${dungeon.dungeonId}.`
    )
    return 'invalid'
  }

  const updatedProfile: ProfileType = {
    ...profile,
    items: applyItemAmounts({
      inventory: profile.items,
      items: battle.loot
    })
  }

  updateGameSession({
    profile: updatedProfile,
    dungeon: updatedDungeon,
    battle: null
  })

  return updatedDungeon ? 'nextRoom' : 'dungeonComplete'
}
