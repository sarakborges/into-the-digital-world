import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const TOKOMON: DigimonType = {
  id: `TOKOMON`,
  name: `Tokomon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.windGuardians.id, ALL_CORES.virusBusters.id],

  stats: {
    hp: 22,
    sp: 14,
    atk: 26,
    def: 10,
    int: 6,
    res: 6,
    spd: 16
  }
}
