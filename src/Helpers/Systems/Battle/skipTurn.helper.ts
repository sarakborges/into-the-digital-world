import { isDigimonDefeated } from '@/Helpers/Systems/Battle/isDigimonDefeated.helper'
import { saveBattle } from '@/Helpers/Systems/Battle/saveBattle.helper'

import { useBattleStore } from '@/Stores/Battle.store'

export const skipTurn = () => {
  const { battle } = useBattleStore.getState()

  if (!battle) {
    return
  }

  const [currentDigimon, ...otherDigimons] = battle.turnOrder

  if (isDigimonDefeated(currentDigimon)) {
    saveBattle({
      ...battle,
      turnOrder: [...otherDigimons, currentDigimon]
    })
  }
}
