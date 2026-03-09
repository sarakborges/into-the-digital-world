import type { PartyDigimon } from './Digimon.type'

export type CombatLogType = Array<{
  text: string
  party: 'enemy' | 'player'
}>

export type ItemsLootType = {
  id: string
  type: 'families' | 'attribute' | 'digimon' | 'item' | 'research'
  quantity: number
}

export type LootType = {
  exp: number
  currency: number
  items: Array<ItemsLootType>
}

export type BattleType = {
  digimons: Array<PartyDigimon>
  turnOrder: Array<string>
  currentDigimon?: PartyDigimon
  isOver?: boolean
  combatLog: CombatLogType
  loot?: LootType

  board: {
    player: Array<string | undefined>
    enemy: Array<string | undefined>
  }
}
