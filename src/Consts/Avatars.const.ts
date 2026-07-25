import type { AvatarType, HexColor } from '@/Types/Avatar.type'

type AvatarColorAsset = {
  color: HexColor
  asset: string
}

export const SKIN_OPTIONS = [
  { color: '#f6d4bd', asset: '1' },
  { color: '#e6b691', asset: '2' },
  { color: '#c98b67', asset: '3' },
  { color: '#a8664d', asset: '4' },
  { color: '#754331', asset: '5' },
  { color: '#43261f', asset: '6' }
] as const satisfies readonly AvatarColorAsset[]

export const EYE_OPTIONS = [
  { color: '#2f9c9c', asset: 'teal' },
  { color: '#c9862c', asset: 'amber' },
  { color: '#4f8a4c', asset: 'green' },
  { color: '#9b7bc3', asset: 'lilac' },
  { color: '#d6b83f', asset: 'yellow' },
  { color: '#6b4028', asset: 'brown' },
  { color: '#d76b2c', asset: 'orange' },
  { color: '#7d8791', asset: 'grey' },
  { color: '#b43b47', asset: 'red' },
  { color: '#6d4ca4', asset: 'purple' },
  { color: '#d56f9d', asset: 'pink' },
  { color: '#394a9b', asset: 'indigo' },
  { color: '#3d79c5', asset: 'blue' }
] as const satisfies readonly AvatarColorAsset[]

export const HAIR_MODELS = ['1', '2', '3', '4', '5', '6', '7', '8'] as const

export const HAIR_COLOR_OPTIONS = [
  { color: '#d7b85f', asset: 'blonde' },
  { color: '#1c1c22', asset: 'black' },
  { color: '#5b3528', asset: 'brunette' },
  { color: '#a94d28', asset: 'ginger' },
  { color: '#e9e2dc', asset: 'albino' }
] as const satisfies readonly AvatarColorAsset[]

export const FULL_CLOTHES_DEFINITIONS = {
  '1': {
    defaultColor: '#202127',
    colors: [
      { color: '#202127', asset: 'black' },
      { color: '#777d86', asset: 'grey' },
      { color: '#e8e8e3', asset: 'white' },
      { color: '#315f9b', asset: 'blue' },
      { color: '#a93643', asset: 'red' },
      { color: '#3f7650', asset: 'green' },
      { color: '#d6b342', asset: 'yellow' },
      { color: '#cf6b2d', asset: 'orange' },
      { color: '#cb6f9b', asset: 'pink' },
      { color: '#a94383', asset: 'magenta' }
    ]
  }
} as const

export const FULL_CLOTHES_MODELS = Object.keys(FULL_CLOTHES_DEFINITIONS)

const getColorAsset = (
  options: readonly AvatarColorAsset[],
  color: HexColor
): string => options.find((option) => option.color === color)?.asset ?? options[0].asset

export const getSkinAsset = (color: HexColor) => getColorAsset(SKIN_OPTIONS, color)

export const getEyeAsset = (color: HexColor) => getColorAsset(EYE_OPTIONS, color)

export const getHairColorAsset = (color: HexColor) =>
  getColorAsset(HAIR_COLOR_OPTIONS, color)

export const getFullClothesColorOptions = (model: string) =>
  FULL_CLOTHES_DEFINITIONS[
    model as keyof typeof FULL_CLOTHES_DEFINITIONS
  ]?.colors ?? FULL_CLOTHES_DEFINITIONS['1'].colors

export const getFullClothesColorAsset = (model: string, color: HexColor) =>
  getColorAsset(getFullClothesColorOptions(model), color)

export const getFullClothesDefaultColor = (model: string): HexColor =>
  FULL_CLOTHES_DEFINITIONS[
    model as keyof typeof FULL_CLOTHES_DEFINITIONS
  ]?.defaultColor ?? FULL_CLOTHES_DEFINITIONS['1'].defaultColor

export const DEFAULT_AVATAR: AvatarType = {
  expression: 'default',
  skinColor: SKIN_OPTIONS[0].color,
  eyeColor: EYE_OPTIONS[0].color,
  hair: {
    model: HAIR_MODELS[0],
    color: HAIR_COLOR_OPTIONS[0].color
  },
  clothes: {
    mode: 'fullClothes',
    fullClothes: {
      model: FULL_CLOTHES_MODELS[0],
      color: FULL_CLOTHES_DEFINITIONS['1'].defaultColor
    },
    top: null,
    bottom: null
  },
  accessories: {}
}
