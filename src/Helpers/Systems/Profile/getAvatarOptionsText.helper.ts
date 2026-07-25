import type { AvatarCustomizationLayer } from '@/Types/Avatar.type'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

export const getAvatarOptionsText = (): Record<
  AvatarCustomizationLayer,
  string
> => ({
  skinColor: getTexts('AVATARCUSTOMIZATION_SKIN'),
  eyeColor: getTexts('AVATARCUSTOMIZATION_EYES'),
  hairModel: getTexts('AVATARCUSTOMIZATION_HAIR'),
  hairColor: getTexts('AVATARCUSTOMIZATION_HAIR_COLOR'),
  fullClothesModel: getTexts('AVATARCUSTOMIZATION_CLOTHES'),
  fullClothesColor: getTexts('AVATARCUSTOMIZATION_CLOTHES')
})
