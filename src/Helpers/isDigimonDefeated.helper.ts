import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

export const isDigimonDefeated = (target: PartyDigimonType) => {
  const targetInjuries = Object.values(target.conditions ?? {}).reduce(
    (acc, cur) => acc + cur.severity,
    0
  )

  return target.stats.vit <= targetInjuries
}
