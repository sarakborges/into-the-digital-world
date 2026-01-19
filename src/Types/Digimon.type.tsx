type DigimonStats = {
  hp: number
  sp: number
  atk: number
  def: number
  int: number
  res: number
  spd: number
}

export type DigimonType = {
  id: string
  name: string
  stage: string
  attribute: Array<string>
  families: Array<string>
  stats: DigimonStats
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
  baseDigimon: DigimonType
  name?: string
  level: number
  stats: DigimonStats
  currentHp: number
  currentSp: number
}

export type PartnerDigimonType = {
  id: number
  isStarter?: boolean
  name?: string
  level: number
  experience: number
  points?: number
  baseDigimon: string | DigimonType
  extraStats?: ExtraStats
}

export type WildDigimonType = {
  id: string
  baseDigimon: string | DigimonType
  extraStats?: ExtraStats
  lootTable?: Array<{
    type: 'core' | 'item'
    coreType: 'family' | 'attribute'
    coreName: string
    quantity: {
      min: number
      max: number
    }
  }>
}
