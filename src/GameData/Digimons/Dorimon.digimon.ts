import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { DIGIMON_FAMILIES } from '@/Consts/Families.const'
import { DIGIMON_ATTRIBUTES } from '@/Consts/Attributes.const'

export const DigimonDorimon: BaseDigimonType = {
  id: 'dorimon',
  name: 'Dorimon',
  portrait: 'digimon_portraits/dorimon',
  fullImage: 'digimons/dorimon',
  attribute: DIGIMON_ATTRIBUTES.na.id,
  families: [DIGIMON_FAMILIES.nsp.id],

  description: `Dorimon is a small Digimon with a dark furry body, sharp eyes, and horn-like ears. Despite their size, they are highly aggressive and instinctive, often attacking anything that enters their territory without hesitation. Dorimon moves quickly and relies on feral combat behavior rather than careful tactics, charging enemies with surprising force for a Digimon at its stage. It can also spit small metal pellets as a ranged attack. Unlike many playful baby Digimon, Dorimon is usually portrayed as wild, territorial, and naturally battle-oriented.`,

  stats: {
    vit: 30,
    sta: 25,
    pow: 50,
    res: 20,
    tec: 15,
    agi: 25,
    ini: 35
  }
}
