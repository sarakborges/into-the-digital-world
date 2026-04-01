import type { CompositionTemplateType } from '@/Types/Composition.type'

type DigimonStats = {
  hp: number
  sp: number
  atk: number
  def: number
  pow: number
  res: number
  spd: number
}

export type DigimonType = {
  id: string
  name: string
  attribute: string
  families: Array<string>
  stats: DigimonStats
  researchCost?: number
  compositionTemplate?: CompositionTemplateType
  specialMoves?: {
    [k: string]: {
      id: string
      name: string
    }
  }
}

type ExtraStat = {
  type: 'percentage' | 'fixed'
  value: number
}

export type ExtraStats = {
  hp?: ExtraStat
  sp?: ExtraStat
  atk?: ExtraStat
  def?: ExtraStat
  int?: ExtraStat
  res?: ExtraStat
  spd?: ExtraStat
}

export type PartyDigimon = {
  id: string
  party: 'player' | 'enemy'
  isElite?: boolean
  baseDigimon: string
  baseId: string
  name?: string
  stats: DigimonStats
  currentHp: number
  currentSp: number
}

export type PartnerDigimonType = {
  id: string
  name?: string
  baseDigimon: string
}

export type LootTableType = {
  id: string
  type: 'core' | 'item' | 'research'
  maxQuantity: number
  dropChance: number
}

export type EnemyDigimonType = {
  id: string
  baseDigimon: string
  extraStats?: ExtraStats
  lootTable?: Array<LootTableType>
  spawnChance?: number
  isElite?: boolean
}
