import type { PartyDigimonType } from './PartyDigimon.type'

export type BattleType = {
  allies: Array<PartyDigimonType>
  enemies: Array<PartyDigimonType>
}
