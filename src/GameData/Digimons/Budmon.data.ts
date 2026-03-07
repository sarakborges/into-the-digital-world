import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const BUDMON: DigimonType = {
  id: `BUDMON`,
  name: `Budmon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.jungleTroopers.id],

  stats: {
    hp: 15,
    sp: 14,
    atk: 13,
    def: 14,
    pow: 15,
    res: 15,
    spd: 14
  }
}
