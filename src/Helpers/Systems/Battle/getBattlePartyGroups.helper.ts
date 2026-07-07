import { getTexts } from '@/Helpers/Language'

import type { BattleType } from '@/Types/Battle.type'
import type { BattlePartyGroupType } from '@/Types/BattleHelpers.type'

export const getBattlePartyGroups = (
  battle: BattleType
): BattlePartyGroupType[] => {
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
