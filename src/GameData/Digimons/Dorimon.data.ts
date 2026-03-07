import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const DORIMON: DigimonType = {
  id: `DORIMON`,
  name: `Dorimon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.natureSpirits.id],

  stats: {
    hp: 16,
    sp: 12,
    atk: 19,
    def: 14,
    pow: 15,
    res: 11,
    spd: 13
  }
}
