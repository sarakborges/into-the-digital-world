export type HexColor = `#${string}`

export type ColorSlotDefinition = {
  label: string
  defaultColor: HexColor
  availableColors: readonly HexColor[]
  mask: string
}

export type SpriteVisualDefinition = {
  colorSlots: Record<string, ColorSlotDefinition>
  shading?: string
  highlights?: string
  details?: string
}

export type PartVisualDefinition = {
  back?: SpriteVisualDefinition
  front?: SpriteVisualDefinition
}

export type CustomizablePartSelection = {
  model: string
  colors: Record<string, HexColor>
}

export type CustomizablePartDefinition = {
  id: string
  visual: PartVisualDefinition
}

export type HairDefinition = CustomizablePartDefinition

export type ClothingCategory = 'top' | 'bottom' | 'fullClothes'

export type ClothingDefinition = CustomizablePartDefinition & {
  category: ClothingCategory
}

export type ClothesMode = 'fullClothes' | 'topBottom'

export type ClothesSelection = {
  mode: ClothesMode
  fullClothes: CustomizablePartSelection | null
  top: CustomizablePartSelection | null
  bottom: CustomizablePartSelection | null
}

export const ACCESSORY_SLOTS = [
  'head',
  'face',
  'ears',
  'neck',
  'back',
  'hands',
  'waist'
] as const

export type AccessorySlot = (typeof ACCESSORY_SLOTS)[number]

export type AccessoryDefinition = CustomizablePartDefinition & {
  slot: AccessorySlot
}

export type AvatarAppearanceType = {
  expression: string
  skinColor: HexColor
  eyeColor: HexColor
  hair: CustomizablePartSelection
  clothes: ClothesSelection
  accessories: Partial<Record<AccessorySlot, CustomizablePartSelection>>
}
