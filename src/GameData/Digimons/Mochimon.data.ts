import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes, DigimonFamilies } from '@/Types/Cores.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const MOCHIMON: DigimonType = {
  id: `MOCHIMON`,
  name: `Mochimon`,
  stage: DigimonStages.inTraining.id,
  attribute: DigimonAttributes.noAttribute.id,
  families: [DigimonFamilies.natureSpirits.id, DigimonFamilies.metalEmpire.id],

  stats: {
    hp: 24,
    sp: 12,
    atk: 12,
    def: 20,
    int: 12,
    res: 10,
    spd: 10
  }
}
