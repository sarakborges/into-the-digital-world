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
    hp: 22,
    sp: 10,
    atk: 24,
    def: 12,
    int: 6,
    res: 6,
    spd: 20
  }
}
