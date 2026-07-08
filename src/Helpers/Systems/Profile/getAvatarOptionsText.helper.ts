import { getTranslation } from '@/Helpers/Language'

export const getAvatarOptionsText = (): { [layer: string]: string } => {
  return {
    skin: getTranslation('AVATARCUSTOMIZATION_SKIN'),
    hair: getTranslation('AVATARCUSTOMIZATION_HAIR'),
    hairColor: getTranslation('AVATARCUSTOMIZATION_HAIR_COLOR'),
    eyes: getTranslation('AVATARCUSTOMIZATION_EYES'),
    clothes: getTranslation('AVATARCUSTOMIZATION_CLOTHES')
  }
}
