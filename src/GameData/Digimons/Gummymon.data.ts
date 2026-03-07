import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const GUMMYMON: DigimonType = {
  id: `GUMMYMON`,
  name: `Gummymon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.natureSpirits.id, ALL_CORES.virusBusters.id],

  stats: {
    hp: 14,
    sp: 20,
    atk: 10,
    def: 12,
    pow: 18,
    res: 16,
    spd: 10
  }
}
