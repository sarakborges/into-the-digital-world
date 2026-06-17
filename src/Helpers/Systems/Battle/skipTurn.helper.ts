import { isDigimonDefeated } from '@/Helpers/Systems/Battle'

import { useBattleStore } from '@/Stores/Battle.store'

export const skipTurn = () => {
  const { battle, setBattle } = useBattleStore.getState()

  if (!battle) {
    return
  }

  const [currentDigimon, ...otherDigimons] = battle.turnOrder

  if (isDigimonDefeated(currentDigimon)) {
    setBattle({
      ...battle,
      turnOrder: [...otherDigimons, currentDigimon]
    })
  }
}
