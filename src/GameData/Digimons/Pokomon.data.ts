import type { DigimonType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const POKOMON: DigimonType = {
  id: `POKOMON`,
  name: `Pokomon`,

  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.natureSpirits.id],

  stats: {
    hp: 18,
    sp: 12,
    atk: 12,
    def: 18,
    pow: 12,
    res: 18,
    spd: 10
  }
}
