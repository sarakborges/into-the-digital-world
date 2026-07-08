import { saveDungeon } from './saveDungeon.helper'

import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const advanceDungeon = (roomId: string) => {
  const { dungeon } = useDungeonStore.getState()
  const { setScene } = useSceneStore.getState()

  if (!dungeon) {
    return
  }

  saveDungeon({
    ...dungeon,
    rooms: [...dungeon.rooms, roomId],
    currentRoomsOptions: []
  })

  setScene(null)
}
