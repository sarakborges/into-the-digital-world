import { saveBattle } from '@/Helpers/Systems/Battle'
import { saveDungeon } from '@/Helpers/Systems/Dungeon'

import { useSceneStore } from '@/Stores/Scene.store'

export const leaveDungeon = () => {
  const { setScene } = useSceneStore.getState()

  saveDungeon(null)
  saveBattle(null)

  setScene(null)
}
