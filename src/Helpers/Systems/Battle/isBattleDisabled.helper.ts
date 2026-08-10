import type { BattleType } from '@/Types/Battle.type'

export const isBattleDisabled = (
  battle: BattleType | null,
  scene: React.FC | null
): boolean => {
  return !!battle || !!scene
}
