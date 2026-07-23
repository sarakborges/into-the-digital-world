import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { NpcType } from '@/Types/Npc.type'
import type { ProfileType } from '@/Types/Profile.type'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

export const getCharacterTitle = (
  character: ProfileType | NpcType | BaseDigimonType
): string | undefined => {
  if (character.name === getTexts('UNKNOWN_NPC')) {
    return undefined
  }

  if ('titles' in character) {
    const title = character.currentTitle
    return title ? getTexts(`TITLES_${title.toLocaleUpperCase()}`) : undefined
  }

  if ('title' in character) {
    return character.title ? getTexts(character.title) : undefined
  }

  return undefined
}
