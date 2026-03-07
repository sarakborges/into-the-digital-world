import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const TSUMEMON: DigimonType = {
  id: `TSUMEMON`,
  name: `Tsumemon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.nightmareSoldiers.id],

  stats: {
    hp: 15,
    sp: 12,
    atk: 20,
    def: 12,
    pow: 17,
    res: 10,
    spd: 14
  }
}
