import type { PartyDigimon } from './Digimon.type'

export type CombatLogType = Array<{
  text: string
  party: 'enemy' | 'player'
}>

export type BattleType = {
  digimons: Array<PartyDigimon>
  turnOrder: Array<string>
  currentDigimon?: PartyDigimon
  isOver?: boolean
  winner?: 'enemy' | 'player'
  combatLog: CombatLogType
}
