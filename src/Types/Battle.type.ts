import type { PartyDigimon } from './Digimon.type'
import type { CoresType } from '@/Types/Cores.type'

export type CombatLogType = Array<{
  text: string
  party: 'enemy' | 'player'
}>

export type LootType = {
  cores: CoresType
  currency: number
  exp: number
}

export type BattleType = {
  digimons: Array<PartyDigimon>
  turnOrder: Array<string>
  currentDigimon?: PartyDigimon
  isOver?: boolean
  winner?: 'enemy' | 'player'
  combatLog: CombatLogType
  loot?: LootType
}
