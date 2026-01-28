import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes, DigimonFamilies } from '@/Types/Cores.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const POROMON: DigimonType = {
  id: `POROMON`,
  name: `Poromon`,
  stage: DigimonStages.inTraining.id,
  attribute: DigimonAttributes.noAttribute.id,
  families: [DigimonFamilies.windGuardians.id],

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
