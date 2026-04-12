import type { DigimonType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const FLADRAMON: DigimonType = {
  id: `FLADRAMON`,
  name: `Fladramon`,
  attribute: ALL_CORES.vaccine.id,
  families: [
    ALL_CORES.dragonsRoar.id,
    ALL_CORES.metalEmpire.id,
    ALL_CORES.natureSpirits.id,
    ALL_CORES.nightmareSoldiers.id
  ],

  stats: {
    hp: 30,
    sp: 18,
    atk: 34,
    def: 22,
    pow: 20,
    res: 12,
    spd: 14
  }
}
