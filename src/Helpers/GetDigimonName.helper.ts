import type { PartyDigimon } from '@/Types/Digimon.type'

import { ALL_DIGIMONS } from '@/GameData/Digimons'

export const getDigimonName = (digimon: PartyDigimon) => {
  const prefix = digimon.isElite && `Elite`
  const digimonName = digimon.name || ALL_DIGIMONS[digimon.baseDigimon].name

  const fullName = [prefix, digimonName].filter((item) => !!item).join(' ')

  return fullName
}
