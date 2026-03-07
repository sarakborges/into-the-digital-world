import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const YARMON: DigimonType = {
  id: `YARMON`,
  name: `Yarmon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.nightmareSoldiers.id],

  stats: {
    hp: 14,
    sp: 14,
    atk: 18,
    def: 10,
    pow: 16,
    res: 10,
    spd: 18
  }
}
