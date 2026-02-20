import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const NYAROMON: DigimonType = {
  id: `NYAROMON`,
  name: `Nyaromon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.natureSpirits.id, ALL_CORES.virusBusters.id],

  stats: {
    hp: 18,
    sp: 18,
    atk: 12,
    def: 10,
    int: 22,
    res: 12,
    spd: 8
  }
}
