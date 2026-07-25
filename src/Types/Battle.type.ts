import type { LootTableEntryType, LootType } from '@/Types/Loot.type'
import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

type BattleBaseType = {
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
}

export type BattleResult = 'ongoing' | 'victory' | 'defeat'

export type ActiveBattleType = BattleBaseType & {
  result?: undefined
  loot?: LootType
}

export type VictoryBattleType = BattleBaseType & {
  result: 'victory'
  loot: LootType
}

export type DefeatBattleType = BattleBaseType & {
  result: 'defeat'
  loot?: undefined
}

export type ResolvedBattleType = VictoryBattleType | DefeatBattleType
export type BattleType = ActiveBattleType | ResolvedBattleType
