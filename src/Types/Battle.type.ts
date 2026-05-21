import type { PartyDigimonType } from './PartyDigimon.type'

export type BattleType = {
  allies: Array<PartyDigimonType>
  enemies: Array<PartyDigimonType>

  turnOrder: Array<{
    party: string
    index: number
    digimon: PartyDigimonType
  }>

  lastDamage?: number
  lastTarget?: PartyDigimonType

  mapPosition: {
    x: number
    y: number
  }
}
