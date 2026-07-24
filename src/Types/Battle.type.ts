import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import type { ItemId } from '@/GameData/Registries/Item.registry'

export type BattleType = {
  turnOrder: Array<
    PartyDigimonType & {
      party: 'allies' | 'enemies'
      index: number

      lootTable?: Array<{
        itemId: ItemId
        dropChance: number
        amount: number
      }>
    }
  >

  combatLog: Array<{
    index: number
    attacker: string
    attackerParty: 'allies' | 'enemies'
    target: string
    attackName: string
    effect?: string
    severity?: number
    isTargetDefeated?: boolean
    hasHitLanded: boolean
  }>

  loot?: Partial<Record<ItemId, number>>
}
