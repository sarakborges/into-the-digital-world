import type { BattleResolution, BattleType } from '@/Types/Battle.type'

import { getActiveDigimons } from '@/Helpers/Systems/Battle/getActiveDigimons.helper'

export const getBattleResult = (
  turnOrder: BattleType['turnOrder']
): BattleResolution => {
  const activeDigimons = getActiveDigimons(turnOrder)

  if (!activeDigimons.length) {
    return 'invalid'
  }

  if (activeDigimons.every((digimon) => digimon.party === 'allies')) {
    return 'victory'
  }

  if (activeDigimons.every((digimon) => digimon.party === 'enemies')) {
    return 'defeat'
  }

  return 'ongoing'
}

export const isBattleOver = (turnOrder: BattleType['turnOrder']): boolean =>
  getBattleResult(turnOrder) !== 'ongoing'
