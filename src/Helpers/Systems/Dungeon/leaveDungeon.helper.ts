import { updateGameSession } from '@/Systems/Session/GameSession'

import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

export const leaveDungeon = (): void => {
  updateGameSession({ dungeon: null, battle: null })
  closeScene()
}
