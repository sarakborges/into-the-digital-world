import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes } from '@/Types/DigimonAttributes.type'
import { DigimonFamilies } from '@/Types/DigimonFamilies.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const BUKAMON: DigimonType = {
  id: `BUKAMON`,
  name: `Bukamon`,
  stage: DigimonStages.inTraining.id,
  attribute: DigimonAttributes.noattribute.id,
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
