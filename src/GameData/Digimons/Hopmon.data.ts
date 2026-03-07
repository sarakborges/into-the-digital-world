import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const HOPMON: DigimonType = {
  id: `HOPMON`,
  name: `Hopmon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.metalEmpire.id],

  stats: {
    hp: 16,
    sp: 13,
    atk: 17,
    def: 14,
    pow: 15,
    res: 12,
    spd: 13
  }
}
