import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes, DigimonFamilies } from '@/Types/Cores.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const TOKOMON: DigimonType = {
  id: `TOKOMON`,
  name: `Tokomon`,
  stage: DigimonStages.inTraining.id,
  attribute: DigimonAttributes.noAttribute.id,
  families: [DigimonFamilies.windGuardians.id, DigimonFamilies.virusBusters.id],

  stats: {
    hp: 22,
    sp: 14,
    atk: 26,
    def: 10,
    int: 6,
    res: 6,
    spd: 16
  }
}
