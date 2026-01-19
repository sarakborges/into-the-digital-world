import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes } from '@/Types/DigimonAttributes.type'
import { DigimonFamilies } from '@/Types/DigimonFamilies.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const NYAROMON: DigimonType = {
  id: `NYAROMON`,
  name: `Nyaromon`,
  stage: DigimonStages.inTraining.id,
  attribute: DigimonAttributes.noattribute.id,
  families: [DigimonFamilies.natureSpirits.id, DigimonFamilies.virusBusters.id],

  stats: {
    hp: 18,
    sp: 18,
    atk: 12,
    def: 10,
    int: 22,
    res: 12,
    spd: 8
  }
}
