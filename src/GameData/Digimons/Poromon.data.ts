import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const POROMON: DigimonType = {
  id: `POROMON`,
  name: `Poromon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.windGuardians.id],

  stats: {
    hp: 14,
    sp: 18,
    atk: 11,
    def: 12,
    pow: 15,
    res: 18,
    spd: 12
  }
}
