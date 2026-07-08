import { isDigimonDefeated } from './isDigimonDefeated.helper'

import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

export const getActiveDigimons = (
  turnOrder: PartyDigimonType[]
): PartyDigimonType[] =>
  turnOrder.filter((digimon) => !isDigimonDefeated(digimon))

export const isBattleOver = (turnOrder: PartyDigimonType[]): boolean =>
  getActiveDigimons(turnOrder).every((digimon) => digimon.party === 'allies') ||
  getActiveDigimons(turnOrder).every((digimon) => digimon.party === 'enemies')
