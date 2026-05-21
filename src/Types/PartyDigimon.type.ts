import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

export type PartyDigimonType = BaseDigimonType & {
  party: 'allies' | 'enemies'
  hp: number
  sp: number
}
