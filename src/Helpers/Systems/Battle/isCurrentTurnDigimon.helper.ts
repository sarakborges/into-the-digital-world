import type { BattleType } from '@/Types/Battle.type'
import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

type IsCurrentTurnDigimonParams = {
  battle: BattleType | null
  digimon: PartyDigimonType
}

export const isCurrentTurnDigimon = ({
  battle,
  digimon
}: IsCurrentTurnDigimonParams): boolean => {
  if (!battle) {
    return false
  }

  return (
    battle.turnOrder[0].party === digimon.party &&
    battle.turnOrder[0].index === digimon.index
  )
}
