import type { BattleType } from '@/Types/Battle.type'

import { isDigimonDefeated } from '@/Helpers/Systems/Battle'

import { useBattleStore } from '@/Stores/Battle.store'

export const getBattleTurnOrder = (): BattleType['turnOrder'] => {
  const { battle } = useBattleStore.getState()

  if (!battle) return []

  return battle.turnOrder.filter((digimon) => !isDigimonDefeated(digimon))
}
