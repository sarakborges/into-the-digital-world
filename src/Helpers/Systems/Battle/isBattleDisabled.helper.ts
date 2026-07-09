import type { BattleType } from '@/Types/Battle.type'
import type { SceneType } from '@/Types/Scene.type'

export const isBattleDisabled = (
  battle: BattleType | null,
  scene: SceneType | null
): boolean => {
  return !!battle || !!scene
}
