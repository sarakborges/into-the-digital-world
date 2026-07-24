import type { BattleType } from '@/Types/Battle.type'

import { setGameSessionValue } from '@/Helpers/Systems/Data/setGameSessionValue.helper'

export const saveBattle = (battle: BattleType | null): void => {
  setGameSessionValue({ key: 'battle', value: battle })
}
