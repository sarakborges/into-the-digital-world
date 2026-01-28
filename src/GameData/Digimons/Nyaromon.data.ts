import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes, DigimonFamilies } from '@/Types/Cores.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const NYAROMON: DigimonType = {
  id: `NYAROMON`,
  name: `Nyaromon`,
  stage: DigimonStages.inTraining.id,
  attribute: DigimonAttributes.noAttribute.id,
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
