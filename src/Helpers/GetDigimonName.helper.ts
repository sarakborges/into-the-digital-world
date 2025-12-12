import type { PartyDigimon } from '@/Types/Digimon.type'

export const getDigimonName = (digimon: PartyDigimon) => {
  if (digimon.name) {
    return `${digimon.name} (${digimon.baseDigimon.name})`
  }

  return digimon.baseDigimon.name
}
