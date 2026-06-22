import {getTexts} from '@/Helpers/Language'

export const getAvatarOptionsText = (): { [layer: string]: string } => {
  return {
    skin: getTexts('AVATARCUSTOMIZATION_SKIN'),
    hair: getTexts('AVATARCUSTOMIZATION_HAIR'),
    hairColor: getTexts('AVATARCUSTOMIZATION_HAIR_COLOR'),
    eyes: getTexts('AVATARCUSTOMIZATION_EYES'),
    clothes: getTexts('AVATARCUSTOMIZATION_CLOTHES')
  }
}
