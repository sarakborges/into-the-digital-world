import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const BUKAMON: DigimonType = {
  id: `BUKAMON`,
  name: `Bukamon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.deepSavers.id],

  stats: {
    hp: 26,
    sp: 10,
    atk: 16,
    def: 20,
    int: 8,
    res: 10,
    spd: 10
  }
}
