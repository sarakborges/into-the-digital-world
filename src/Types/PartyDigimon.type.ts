import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

export type PartyDigimonType = BaseDigimonType & {
  party: 'allies' | 'enemies'
  index: number

  conditions?: {
    [conditionId: string]: {
      severity: number
    }
  }
}
