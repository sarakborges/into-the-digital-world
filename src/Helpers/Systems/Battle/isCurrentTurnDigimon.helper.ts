import type { BattleType } from '@/Types/Battle.type'
import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

export const isCurrentTurnDigimon = (
  battle: BattleType | null,
  digimon: PartyDigimonType
): boolean => {
  if (!battle) {
    return false
  }

  return (
    battle.turnOrder[0].party === digimon.party &&
    battle.turnOrder[0].index === digimon.index
  )
}
