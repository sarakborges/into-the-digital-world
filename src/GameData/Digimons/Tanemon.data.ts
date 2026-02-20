import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const TANEMON: DigimonType = {
  id: `TANEMON`,
  name: `Tanemon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.jungleTroopers.id],

  stats: {
    hp: 24,
    sp: 20,
    atk: 10,
    def: 12,
    int: 20,
    res: 10,
    spd: 4
  }
}
