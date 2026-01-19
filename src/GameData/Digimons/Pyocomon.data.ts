import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes } from '@/Types/DigimonAttributes.type'
import { DigimonFamilies } from '@/Types/DigimonFamilies.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const PYOCOMON: DigimonType = {
  id: `PYOCOMON`,
  name: `Pyocomon`,
  stage: DigimonStages.inTraining.id,
  attribute: DigimonAttributes.noattribute.id,
  families: [
    DigimonFamilies.windGuardians.id,
    DigimonFamilies.jungleTroopers.id
  ],

  stats: {
    hp: 18,
    sp: 16,
    atk: 12,
    def: 10,
    int: 20,
    res: 10,
    spd: 14
  }
}
