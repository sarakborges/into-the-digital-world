import type {
  AvatarAppearanceType,
  ClothesMode,
  CustomizablePartDefinition,
  CustomizablePartSelection,
  HexColor
} from '@/Types/AvatarAppearance.type'

export const createDefaultPartSelection = (
  definition: CustomizablePartDefinition
): CustomizablePartSelection => ({
  model: definition.id,
  color: definition.defaultColor
})

export const normalizePartSelection = (
  selection: CustomizablePartSelection,
  definition: CustomizablePartDefinition
): CustomizablePartSelection => ({
  model: definition.id,
  color: definition.availableColors.includes(selection.color)
    ? selection.color
    : definition.defaultColor
})

export const updatePartColor = (
  selection: CustomizablePartSelection,
  definition: CustomizablePartDefinition,
  color: HexColor
): CustomizablePartSelection => {
  if (!definition.availableColors.includes(color)) {
    return selection
  }

  return {
    ...selection,
    color
  }
}

export const changeClothesMode = (
  avatar: AvatarAppearanceType,
  mode: ClothesMode
): AvatarAppearanceType => ({
  ...avatar,
  clothes: {
    ...avatar.clothes,
    mode
  }
})

export const selectTop = (
  avatar: AvatarAppearanceType,
  top: CustomizablePartSelection
): AvatarAppearanceType => ({
  ...avatar,
  clothes: {
    ...avatar.clothes,
    mode: 'topBottom',
    top
  }
})

export const selectBottom = (
  avatar: AvatarAppearanceType,
  bottom: CustomizablePartSelection
): AvatarAppearanceType => ({
  ...avatar,
  clothes: {
    ...avatar.clothes,
    mode: 'topBottom',
    bottom
  }
})

export const selectFullClothes = (
  avatar: AvatarAppearanceType,
  fullClothes: CustomizablePartSelection
): AvatarAppearanceType => ({
  ...avatar,
  clothes: {
    ...avatar.clothes,
    mode: 'fullClothes',
    fullClothes
  }
})

export const hasValidActiveClothes = (
  avatar: AvatarAppearanceType
): boolean => {
  const { clothes } = avatar

  return clothes.mode === 'fullClothes'
    ? !!clothes.fullClothes
    : !!clothes.top && !!clothes.bottom
}
