import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { isDigimonDefeated } from '@/Helpers/Systems/Battle/isDigimonDefeated.helper'

export const getActiveDigimons = (
  turnOrder: PartyDigimonType[]
): PartyDigimonType[] =>
  turnOrder.filter((digimon) => !isDigimonDefeated(digimon))
