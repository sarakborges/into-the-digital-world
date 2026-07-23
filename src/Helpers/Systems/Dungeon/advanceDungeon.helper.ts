import { saveDungeon } from '@/Helpers/Systems/Dungeon/saveDungeon.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { useDungeonStore } from '@/Stores/Dungeon.store'

export const advanceDungeon = (roomId: string) => {
  const { dungeon } = useDungeonStore.getState()

  if (!dungeon) {
    return
  }

  saveDungeon({
    ...dungeon,
    rooms: [...dungeon.rooms, roomId],
    currentRoomsOptions: []
  })

  closeScene()
}
