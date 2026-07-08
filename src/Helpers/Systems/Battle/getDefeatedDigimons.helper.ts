import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { isDigimonDefeated } from '@/Helpers/Systems/Battle'

export const getDefeatedDigimons = (
  turnOrder: PartyDigimonType[]
): PartyDigimonType[] => {
  return turnOrder.filter((digimon) => !isDigimonDefeated(digimon))
}

export const isBattleOver = (turnOrder: PartyDigimonType[]): boolean => {
  const notDefeated = getDefeatedDigimons(turnOrder)

  return (
    notDefeated.every((digimon) => digimon.party === 'allies') ||
    notDefeated.every((digimon) => digimon.party === 'enemies')
  )
}
