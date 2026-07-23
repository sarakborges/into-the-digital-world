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
  const currentTurn = battle?.turnOrder[0]

  if (!currentTurn) {
    return false
  }

  return (
    currentTurn.party === digimon.party && currentTurn.index === digimon.index
  )
}
