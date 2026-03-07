import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const UPAMON: DigimonType = {
  id: `UPAMON`,
  name: `Upamon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.deepSavers.id],

  stats: {
    hp: 14,
    sp: 17,
    atk: 11,
    def: 12,
    pow: 14,
    res: 15,
    spd: 17
  }
}
