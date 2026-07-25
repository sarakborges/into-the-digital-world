import { updateGameSession } from '@/Systems/Session/GameSession'

import { warpTo } from '@/Helpers/Systems/Zones/warpTo.helper'

export const triggerDefeat = (): void => {
  updateGameSession({ dungeon: null, battle: null })

  warpTo({
    x: 3,
    y: 5,
    zone: 'rootDomain',
    map: 'restRoom'
  })
}
