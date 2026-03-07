import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const WANYAMON: DigimonType = {
  id: `WANYAMON`,
  name: `Wanyamon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.natureSpirits.id],

  stats: {
    hp: 15,
    sp: 13,
    atk: 16,
    def: 11,
    pow: 14,
    res: 11,
    spd: 20
  }
}
