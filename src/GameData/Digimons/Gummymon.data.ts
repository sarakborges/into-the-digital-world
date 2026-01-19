import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes } from '@/Types/DigimonAttributes.type'
import { DigimonFamilies } from '@/Types/DigimonFamilies.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const GUMMYMON: DigimonType = {
  id: `GUMMYMON`,
  name: `Gummymon`,
  stage: DigimonStages.inTraining.id,
  attribute: DigimonAttributes.noattribute.id,
  families: [DigimonFamilies.natureSpirits.id, DigimonFamilies.virusBusters.id],

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
