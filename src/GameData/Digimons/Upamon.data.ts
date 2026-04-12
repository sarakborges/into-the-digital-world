import type { DigimonType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

const upamon: DigimonType = {
  id: `UPAMON`,
  name: `Upamon`,

  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.deepSavers.id],

  stats: {
    hp: 14,
    sp: 17,
    atk: 11,
    def: 12,
    pow: 14,
    res: 15,
    spd: 17
  }
}

export const UPAMON = { ...upamon }
