import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { AcidBubblesAttack } from '@/GameData/Attacks/AcidBubbles.attack'
import { BubblesAttack } from '@/GameData/Attacks/Bubbles.attack'
import { PoisonBubblesAttack } from '@/GameData/Attacks/PoisonBubbles.attack'

import { DIGIMON_ATTRIBUTES } from '@/Consts/Attributes.const'
import { DIGIMON_FAMILIES } from '@/Consts/Families.const'

export const DigimonKoromon: BaseDigimonType = {
  id: 'koromon',
  name: 'Koromon',
  portrait: 'digimon_portraits/koromon',
  fullImage: 'digimons/koromon',
  attribute: DIGIMON_ATTRIBUTES.na.id,
  equipmentsSlots: 1,

  attacks: {
    [BubblesAttack.id]: null,
    [AcidBubblesAttack.id]: null,
    [PoisonBubblesAttack.id]: null
  },

  families: {
    [DIGIMON_FAMILIES.dr.id]: null,
    [DIGIMON_FAMILIES.vb.id]: null
  },

  description: `Koromon is a small Digimon with a pink, round body, large mouth, and floppy ears. They are very active and curious, though still physically weak. Instead of fighting directly, Koromon usually defends itself by blowing bubbles to scare or distract enemies. It is commonly portrayed as friendly, playful, and energetic.`,

  stats: {
    vit: 4,
    pow: 2,
    res: 4,
    tec: 6,
    agi: 4
  }
}
