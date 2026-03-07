import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const PETITMERAMON: DigimonType = {
  id: `PETITMERAMON`,
  name: `Petit Meramon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.nightmareSoldiers.id, ALL_CORES.metalEmpire.id],

  stats: {
    hp: 12,
    sp: 18,
    atk: 14,
    def: 9,
    pow: 22,
    res: 13,
    spd: 12
  }
}
