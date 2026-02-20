import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const MOCHIMON: DigimonType = {
  id: `MOCHIMON`,
  name: `Mochimon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.natureSpirits.id, ALL_CORES.metalEmpire.id],

  stats: {
    hp: 24,
    sp: 12,
    atk: 12,
    def: 20,
    int: 12,
    res: 10,
    spd: 10
  }
}
