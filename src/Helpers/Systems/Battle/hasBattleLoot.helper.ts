import type { BattleType } from '@/Types/Battle.type'

export const hasBattleLoot = (battle: BattleType | null): boolean => {
  if (!battle) {
    return false
  }

  return !!Object.keys(battle.loot ?? {}).length
}
