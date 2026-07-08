import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

export const isDigimonDefeated = (target: PartyDigimonType) => {
  if (!target.conditions) {
    return false
  }

  const damageConditions = new Set(['shaken', 'poisoned'])

  const targetInjuries = Object.entries(target.conditions).reduce(
    (acc, [condition, stack]) => {
      if (!damageConditions.has(condition)) {
        return acc
      }

      return acc + (stack || 0)
    },
    0
  )

  return target.stats.vit <= targetInjuries
}
