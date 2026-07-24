import type { DigimonStatId } from '@/Types/BaseDigimon.type'

export const DIGIMON_STATS = [
  'vit',
  'pow',
  'res',
  'tec',
  'agi'
] as const satisfies ReadonlyArray<DigimonStatId>
