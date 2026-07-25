export type HexColor = `#${string}`

export type SpriteVisualDefinition = {
  mask: string
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
  color: HexColor
}

export type CustomizablePartDefinition = {
  id: string
  defaultColor: HexColor
  availableColors: readonly HexColor[]
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

export const AVATAR_CUSTOMIZATION_LAYERS = [
  'skinColor',
  'eyeColor',
  'hairModel',
  'hairColor',
  'fullClothesModel',
  'fullClothesColor'
] as const

export type AvatarCustomizationLayer =
  (typeof AVATAR_CUSTOMIZATION_LAYERS)[number]
