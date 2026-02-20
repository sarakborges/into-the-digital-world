import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const PYOCOMON: DigimonType = {
  id: `PYOCOMON`,
  name: `Pyocomon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.windGuardians.id, ALL_CORES.jungleTroopers.id],

  stats: {
    hp: 18,
    sp: 16,
    atk: 12,
    def: 10,
    int: 20,
    res: 10,
    spd: 14
  }
}
