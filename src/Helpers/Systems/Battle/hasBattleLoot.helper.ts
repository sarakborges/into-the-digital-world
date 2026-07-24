import type { BattleType } from '@/Types/Battle.type'

type BattleWithLoot = BattleType & {
  loot: NonNullable<BattleType['loot']>
}

export const hasBattleLoot = (
  battle: BattleType | null
): battle is BattleWithLoot => {
  if (!battle) {
    return false
  }

  return !!Object.keys(battle.loot ?? {}).length
}
