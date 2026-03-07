import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const MINOMON: DigimonType = {
  id: `MINOMON`,
  name: `Minomon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.jungleTroopers.id],

  stats: {
    hp: 20,
    sp: 10,
    atk: 11,
    def: 19,
    pow: 10,
    res: 20,
    spd: 10
  }
}
