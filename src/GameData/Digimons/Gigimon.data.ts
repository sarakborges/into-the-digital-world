import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const GIGIMON: DigimonType = {
  id: `GIGIMON`,
  name: `Gigimon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.dragonsRoar.id],

  stats: {
    hp: 17,
    sp: 13,
    atk: 18,
    def: 14,
    pow: 17,
    res: 11,
    spd: 10
  }
}
