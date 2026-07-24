import type { LootTableEntryType, LootType } from '@/Types/Loot.type'
import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

export type BattleType = {
  turnOrder: Array<
    PartyDigimonType & {
      party: 'allies' | 'enemies'
      index: number
      lootTable?: Array<LootTableEntryType>
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

  loot?: LootType
}
