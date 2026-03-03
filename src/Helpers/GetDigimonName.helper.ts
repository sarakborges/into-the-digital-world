import type { PartyDigimon } from '@/Types/Digimon.type'

export const getDigimonName = (digimon: PartyDigimon) => {
  const prefix = digimon.isElite && `Elite`
  const digimonName = digimon.name || digimon.baseDigimon.name

  const fullName = [prefix, digimonName].filter((item) => !!item).join(' ')

  return fullName
}
