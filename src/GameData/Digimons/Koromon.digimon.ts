import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { DIGIMON_FAMILIES } from '@/Consts/Families.const'
import { DIGIMON_ATTRIBUTES } from '@/Consts/Attributes.const'

export const DigimonKoromon: BaseDigimonType = {
  id: 'koromon',
  name: 'Koromon',
  portrait: 'digimon_portraits/KOROMON',
  fullImage: 'digimons/KOROMON',
  attribute: DIGIMON_ATTRIBUTES.na.id,
  families: [DIGIMON_FAMILIES.dr.id, DIGIMON_FAMILIES.vb.id],

  description: `Koromon is a small Digimon with a pink, round body, large mouth, and floppy ears. They are very active and curious, though still physically weak. Instead of fighting directly, Koromon usually defends itself by blowing bubbles to scare or distract enemies. It is commonly portrayed as friendly, playful, and energetic.`,

  stats: {
    vit: 25,
    sta: 40,
    pow: 25,
    res: 20,
    tec: 35,
    agi: 25,
    ini: 30
  }
}
