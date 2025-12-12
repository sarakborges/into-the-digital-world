import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes } from '@/Types/DigimonAttributes.type'
import { DigimonFamilies } from '@/Types/DigimonFamilies.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const MOCHIMON: DigimonType = {
  id: `MOCHIMON`,
  name: `Mochimon`,
  stage: DigimonStages.inTraining,
  attribute: DigimonAttributes.noattribute,
  families: [DigimonFamilies.natureSpirits, DigimonFamilies.metalEmpire],

  stats: {
    hp: 24,
    sp: 12,
    atk: 12,
    def: 20,
    int: 12,
    res: 10,
    spd: 10
  }
}
