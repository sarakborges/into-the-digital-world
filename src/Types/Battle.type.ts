import type { ItemType } from '@/Types/Item.type'
import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

export type BattleType = {
  turnOrder: Array<
    PartyDigimonType & {
      party: 'allies' | 'enemies'
      index: number

      lootTable?: Array<{
        itemId: string
        dropChance: number
        amount: number
      }>
    }
  >

  combatLog: Array<{
    attacker: string
    attackerParty: 'allies' | 'enemies'
    target: string
    attackName: string
    effect?: string
    severity?: number
    isTargetDefeated?: boolean
    hasHitLanded: boolean
  }>

  loot?: {
    [itemId: string]: number
  }
}
