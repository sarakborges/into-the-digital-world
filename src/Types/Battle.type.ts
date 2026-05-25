import type { ItemType } from '@/Types/Item.type'
import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

export type BattleType = {
  allies: Array<PartyDigimonType>
  enemies: Array<
    PartyDigimonType & {
      lootTable?: Array<{
        itemId: string
        dropChance: number
        amount: number
      }>
    }
  >
  result?: 'victory' | 'defeat'

  turnOrder: Array<{
    party: 'allies' | 'enemies'
    index: number
    digimon: PartyDigimonType
  }>

  combatLog: Array<{
    attacker: string
    target: string
    damage: number
    party: 'allies' | 'enemies'
    isDefeated: boolean
    isCrit: boolean
    isHit: boolean
  }>

  mapPosition: {
    x: number
    y: number
  }

  loot?: {
    [itemId: string]: ItemType & { amount: number }
  }
}
