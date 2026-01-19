import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes } from '@/Types/DigimonAttributes.type'
import { DigimonFamilies } from '@/Types/DigimonFamilies.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const TUNOMON: DigimonType = {
  id: `TUNOMON`,
  name: `Tunomon`,
  stage: DigimonStages.inTraining.id,
  attribute: DigimonAttributes.noattribute.id,
  families: [DigimonFamilies.natureSpirits.id],

  stats: {
    hp: 18,
    sp: 14,
    atk: 16,
    def: 10,
    int: 20,
    res: 10,
    spd: 12
  }
}
