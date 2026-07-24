import type { ConditionId } from '@/Types/Condition.type'
import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

export const isDigimonDefeated = (target: PartyDigimonType) => {
  if (!target.conditions) {
    return false
  }

  const damageConditions = ['shaken', 'poisoned'] satisfies ConditionId[]

  const targetInjuries = damageConditions.reduce(
    (total, condition) => total + (target.conditions?.[condition] ?? 0),
    0
  )

  return target.stats.vit <= targetInjuries
}
