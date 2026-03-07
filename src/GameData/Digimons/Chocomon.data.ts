import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const CHOCOMON: DigimonType = {
  id: `CHOCOMON`,
  name: `Chocomon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.virusBusters.id],

  stats: {
    hp: 17,
    sp: 16,
    atk: 11,
    def: 15,
    pow: 13,
    res: 16,
    spd: 12
  }
}
