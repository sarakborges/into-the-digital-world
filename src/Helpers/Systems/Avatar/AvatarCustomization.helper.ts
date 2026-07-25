import type {
  AvatarAppearanceType,
  ClothesMode,
  ColorSlotDefinition,
  CustomizablePartDefinition,
  CustomizablePartSelection,
  HexColor,
  SpriteVisualDefinition
} from '@/Types/AvatarAppearance.type'

const getVisualDefinitions = (
  definition: CustomizablePartDefinition
): SpriteVisualDefinition[] =>
  [definition.visual.back, definition.visual.front].filter(
    (visual): visual is SpriteVisualDefinition => !!visual
  )

export const getColorSlotDefinitions = (
  definition: CustomizablePartDefinition
): Record<string, ColorSlotDefinition> =>
  Object.assign(
    {},
    ...getVisualDefinitions(definition).map((visual) => visual.colorSlots)
  )

export const createDefaultPartSelection = (
  definition: CustomizablePartDefinition
): CustomizablePartSelection => {
  const colorSlots = getColorSlotDefinitions(definition)

  return {
    model: definition.id,
    colors: Object.fromEntries(
      Object.entries(colorSlots).map(([slotId, slot]) => [
        slotId,
        slot.defaultColor
      ])
    )
  }
}

export const normalizePartSelection = (
  selection: CustomizablePartSelection,
  definition: CustomizablePartDefinition
): CustomizablePartSelection => {
  const colorSlots = getColorSlotDefinitions(definition)

  return {
    model: definition.id,
    colors: Object.fromEntries(
      Object.entries(colorSlots).map(([slotId, slot]) => {
        const selectedColor = selection.colors[slotId]

        return [
          slotId,
          selectedColor && slot.availableColors.includes(selectedColor)
            ? selectedColor
            : slot.defaultColor
        ]
      })
    )
  }
}

export const updatePartColor = (
  selection: CustomizablePartSelection,
  definition: CustomizablePartDefinition,
  slotId: string,
  color: HexColor
): CustomizablePartSelection => {
  const colorSlot = getColorSlotDefinitions(definition)[slotId]

  if (!colorSlot?.availableColors.includes(color)) {
    return selection
  }

  return {
    ...selection,
    colors: {
      ...selection.colors,
      [slotId]: color
    }
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
