import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const CHIBIMON: DigimonType = {
  id: `CHIBIMON`,
  name: `Chibimon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.virusBusters.id],

  stats: {
    hp: 16,
    sp: 14,
    atk: 15,
    def: 14,
    pow: 14,
    res: 13,
    spd: 14
  }
}
