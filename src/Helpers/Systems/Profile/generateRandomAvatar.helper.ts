import type { AvatarType } from '@/Types/Avatar.type'

import {
  EYE_OPTIONS,
  FULL_CLOTHES_DEFINITIONS,
  FULL_CLOTHES_MODELS,
  HAIR_COLOR_OPTIONS,
  HAIR_MODELS,
  SKIN_OPTIONS
} from '@/Consts/Avatars.const'

const getRandomOption = <Option>(options: readonly Option[]): Option =>
  options[Math.floor(Math.random() * options.length)]

export const generateRandomAvatar = (): AvatarType => {
  const fullClothesModel = getRandomOption(FULL_CLOTHES_MODELS)
  const fullClothesDefinition =
    FULL_CLOTHES_DEFINITIONS[
      fullClothesModel as keyof typeof FULL_CLOTHES_DEFINITIONS
    ]
  const fullClothesColor = getRandomOption(fullClothesDefinition.colors)

  return {
    expression: 'default',
    skinColor: getRandomOption(SKIN_OPTIONS).color,
    eyeColor: getRandomOption(EYE_OPTIONS).color,
    hair: {
      model: getRandomOption(HAIR_MODELS),
      color: getRandomOption(HAIR_COLOR_OPTIONS).color
    },
    clothes: {
      mode: 'fullClothes',
      fullClothes: {
        model: fullClothesModel,
        color: fullClothesColor.color
      },
      top: null,
      bottom: null
    },
    accessories: {}
  }
}
