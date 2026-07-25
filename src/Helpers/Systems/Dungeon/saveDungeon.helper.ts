import type { DungeonStoreType } from '@/Types/Dungeon.type'

import { updateGameSession } from '@/Systems/Session/GameSession'

export const saveDungeon = (dungeon: DungeonStoreType | null): void => {
  updateGameSession({ dungeon })
}
