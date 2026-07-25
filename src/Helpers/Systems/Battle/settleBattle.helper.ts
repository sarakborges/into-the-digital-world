import type { ResolvedBattleType } from '@/Types/Battle.type'
import type { ProfileType } from '@/Types/Profile.type'

import { updateGameSession } from '@/Systems/Session/GameSession'

import type { DungeonRoomSettlementResult } from '@/Helpers/Systems/Dungeon/settleDungeonRoom.helper'
import { getDungeonRoomSettlement } from '@/Helpers/Systems/Dungeon/settleDungeonRoom.helper'
import { applyItemAmounts } from '@/Helpers/Systems/Profile/applyItemAmounts.helper'
import { warpTo } from '@/Helpers/Systems/Zones/warpTo.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

export type BattleSettlementResult = DungeonRoomSettlementResult | 'defeat'

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

  const dungeonSettlement = getDungeonRoomSettlement({
    dungeon,
    party: battle.turnOrder.filter((digimon) => digimon.party === 'allies')
  })

  if (!dungeonSettlement) {
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
    dungeon: dungeonSettlement.dungeon,
    battle: null
  })

  return dungeonSettlement.result
}
