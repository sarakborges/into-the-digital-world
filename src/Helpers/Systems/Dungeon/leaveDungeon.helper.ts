import { saveBattle } from '@/Helpers/Systems/Battle'
import { saveDungeon } from '@/Helpers/Systems/Dungeon'
import { closeScene } from '@/Helpers/Systems/Scenes'

export const leaveDungeon = () => {
  saveDungeon(null)
  saveBattle(null)

  closeScene()
}
