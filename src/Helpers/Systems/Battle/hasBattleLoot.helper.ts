import type {
  BattleType,
  VictoryBattleType
} from '@/Types/Battle.type'

export const hasBattleLoot = (
  battle: BattleType | null
): battle is VictoryBattleType =>
  battle?.result === 'victory' && Object.keys(battle.loot).length > 0
