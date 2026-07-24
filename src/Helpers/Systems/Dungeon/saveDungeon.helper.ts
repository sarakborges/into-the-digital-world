import type { DungeonStoreType } from '@/Types/Dungeon.type'

import { setGameSessionValue } from '@/Helpers/Systems/Data/setGameSessionValue.helper'

export const saveDungeon = (dungeon: DungeonStoreType | null): void => {
  setGameSessionValue({ key: 'dungeon', value: dungeon })
}
