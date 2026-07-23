import type { AvatarCustomizationLayer } from '@/Types/Avatar.type'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

export const getAvatarOptionsText = (): Record<
  AvatarCustomizationLayer,
  string
> => {
  return {
    skin: getTexts('AVATARCUSTOMIZATION_SKIN'),
    hair: getTexts('AVATARCUSTOMIZATION_HAIR'),
    hairColor: getTexts('AVATARCUSTOMIZATION_HAIR_COLOR'),
    eyes: getTexts('AVATARCUSTOMIZATION_EYES'),
    clothes: getTexts('AVATARCUSTOMIZATION_CLOTHES')
  }
}
