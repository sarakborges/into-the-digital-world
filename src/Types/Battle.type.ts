import type { BaseDigimonType } from './BaseDigimon.type'

export type BattleType = {
  allies: Array<BaseDigimonType>
  enemies: Array<BaseDigimonType>
}
