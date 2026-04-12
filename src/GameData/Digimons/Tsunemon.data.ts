import type { DigimonType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

const tsumemon: DigimonType = {
  id: `TSUMEMON`,
  name: `Tsumemon`,

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

export const TSUMEMON = { ...tsumemon }
