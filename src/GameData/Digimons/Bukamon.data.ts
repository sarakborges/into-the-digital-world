import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes, DigimonFamilies } from '@/Types/Cores.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const BUKAMON: DigimonType = {
  id: `BUKAMON`,
  name: `Bukamon`,
  stage: DigimonStages.inTraining.id,
  attribute: DigimonAttributes.noAttribute.id,
  families: [DigimonFamilies.deepSavers.id],

  stats: {
    hp: 26,
    sp: 10,
    atk: 16,
    def: 20,
    int: 8,
    res: 10,
    spd: 10
  }
}
