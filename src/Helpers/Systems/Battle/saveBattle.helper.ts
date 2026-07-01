import type { BattleType } from '@/Types/Battle.type'

import { useBattleStore } from '@/Stores/Battle.store'

export const saveBattle = (battle: BattleType | null) => {
  try {
    const { setBattle } = useBattleStore.getState()

    sessionStorage.setItem(`itdw_battle`, JSON.stringify(battle))

    setBattle(battle)
  } catch (error) {
    console.warn(`Error saving battle: ${error}`)
    console.warn(battle)
  }
}
