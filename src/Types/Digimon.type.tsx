import type { CompositionRecipeType } from '@/Types/Composition.type'

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
  stage: string
  attribute: string
  families: Array<string>
  stats: DigimonStats
  composeRecipe?: Array<CompositionRecipeType>
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
  baseDigimon: DigimonType
  baseId: string
  name?: string
  level: number
  stats: DigimonStats
  currentHp: number
  currentSp: number
}

export type PartnerDigimonType = {
  id: string
  name?: string
  level: number
  experience: number
  points?: number
  baseDigimon: string | DigimonType
  extraStats?: ExtraStats
}

export type LootTableType = {
  type: 'core' | 'item'
  coreId: string
  coreType: string
  quantity: {
    min: number
    max: number
  }
}

export type EnemyDigimonType = {
  id: string
  baseDigimon: string | DigimonType
  extraStats?: ExtraStats
  lootTable?: Array<LootTableType>
  spawnChance?: number
  isElite?: boolean
}
