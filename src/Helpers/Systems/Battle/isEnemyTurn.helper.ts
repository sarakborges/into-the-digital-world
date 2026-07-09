import type { BattleType } from '@/Types/Battle.type'

export const isEnemyTurn = (battle: BattleType | null): boolean => {
  if (!battle) {
    return true
  }

  const [currentTurn] = battle.turnOrder
  return currentTurn.party === 'enemies'
}
