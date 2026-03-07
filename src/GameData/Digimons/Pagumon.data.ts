import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const PAGUMON: DigimonType = {
  id: `PAGUMON`,
  name: `Pagumon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.nightmareSoldiers.id],

  stats: {
    hp: 15,
    sp: 18,
    atk: 12,
    def: 11,
    pow: 19,
    res: 15,
    spd: 10
  }
}
