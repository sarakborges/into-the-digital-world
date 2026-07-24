import type { BattlePartyGroupType } from '@/Types/BattleHelpers.type'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useBattleStore } from '@/Stores/Battle.store'

export const getBattlePartyGroups = (): BattlePartyGroupType[] => {
  const { battle } = useBattleStore.getState()

  if (!battle) {
    return []
  }

  const partyGroups: Array<Omit<BattlePartyGroupType, 'list'>> = [
    {
      party: 'allies',
      title: getTexts('BATTLE_PARTY_ALLIES')
    },
    {
      party: 'enemies',
      title: getTexts('BATTLE_PARTY_ENEMIES')
    }
  ]

  return partyGroups.map(({ party, title }) => ({
    party,
    title,
    list: battle.turnOrder
      .filter((digimon) => digimon.party === party)
      .sort((a, b) => (a.index > b.index ? 1 : -1))
  }))
}
