import { saveDungeon } from '@/Helpers/Systems/Dungeon'
import { saveBattle } from '@/Helpers/Systems/Battle'

import { useSceneStore } from '@/Stores/Scene.store'

export const leaveDungeon = () => {
  const { setScene } = useSceneStore.getState()

  saveDungeon(null)
  saveBattle(null)

  setScene(null)
}
