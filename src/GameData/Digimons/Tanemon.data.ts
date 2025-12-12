import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes } from '@/Types/DigimonAttributes.type'
import { DigimonFamilies } from '@/Types/DigimonFamilies.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const TANEMON: DigimonType = {
  id: `TANEMON`,
  name: `Tanemon`,
  stage: DigimonStages.inTraining,
  attribute: DigimonAttributes.noattribute,
  families: [DigimonFamilies.jungleTroopers],

  stats: {
    hp: 24,
    sp: 20,
    atk: 10,
    def: 12,
    int: 20,
    res: 10,
    spd: 4
  }
}
