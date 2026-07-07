import type { BattleType } from '@/Types/Battle.type'

import { isDigimonDefeated } from '@/Helpers/Systems/Battle'

export const getBattleTurnOrder = (battle: BattleType) =>
  battle.turnOrder.filter((digimon) => !isDigimonDefeated(digimon))
