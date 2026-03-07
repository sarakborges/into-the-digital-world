import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const KYOKYOMON: DigimonType = {
  id: `KYOKYOMON`,
  name: `Kyokyomon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.dragonsRoar.id],

  stats: {
    hp: 14,
    sp: 13,
    atk: 17,
    def: 12,
    pow: 16,
    res: 12,
    spd: 16
  }
}
