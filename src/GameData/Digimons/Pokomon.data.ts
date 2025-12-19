import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes } from '@/Types/DigimonAttributes.type'
import { DigimonFamilies } from '@/Types/DigimonFamilies.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const POKOMON: DigimonType = {
  id: `POKOMON`,
  name: `Pokomon`,
  stage: DigimonStages.inTraining,
  attribute: DigimonAttributes.noattribute,
  families: [DigimonFamilies.natureSpirits],

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
