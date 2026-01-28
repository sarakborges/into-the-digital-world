import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes, DigimonFamilies } from '@/Types/Cores.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const KYOKYOMON: DigimonType = {
  id: `KYOKYOMON`,
  name: `Kyokyomon`,
  stage: DigimonStages.inTraining.id,
  attribute: DigimonAttributes.noAttribute.id,
  families: [DigimonFamilies.dragonsRoar.id],

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
