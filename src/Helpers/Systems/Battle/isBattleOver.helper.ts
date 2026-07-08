import { isDigimonDefeated } from '@/Helpers/Systems/Battle'

import { useBattleStore } from '@/Stores/Battle.store'

export const isBattleOver = (): boolean => {
  const { battle } = useBattleStore.getState()

  if (!battle) {
    return true
  }

  const notDefeated = battle.turnOrder.filter(
    (digimon) => !isDigimonDefeated(digimon)
  )

  return (
    notDefeated.every((digimon) => digimon.party === 'allies') ||
    notDefeated.every((digimon) => digimon.party === 'enemies')
  )
}
