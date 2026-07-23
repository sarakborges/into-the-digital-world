import type { BattlePartyGroupType } from '@/Types/BattleHelpers.type'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useBattleStore } from '@/Stores/Battle.store'

export const getBattlePartyGroups = (): BattlePartyGroupType[] => {
  const { battle } = useBattleStore.getState()

  if (!battle) {
    return []
  }

  const partyLabels: Record<'allies' | 'enemies', string> = {
    allies: getTexts('BATTLE_PARTY_ALLIES'),
    enemies: getTexts('BATTLE_PARTY_ENEMIES')
  }

  return (Object.keys(partyLabels) as Array<keyof typeof partyLabels>).map(
    (party) => ({
      party,
      title: partyLabels[party],
      list: battle.turnOrder
        .filter((digimon) => digimon.party === party)
        .sort((a, b) => (a.index > b.index ? 1 : -1))
    })
  )
}
