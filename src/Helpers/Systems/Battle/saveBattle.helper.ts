import type { BattleType } from '@/Types/Battle.type'

import { updateGameSession } from '@/Systems/Session/GameSession'

export const saveBattle = (battle: BattleType | null): void => {
  updateGameSession({ battle })
}
