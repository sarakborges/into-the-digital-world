import { saveDungeon } from '@/Helpers/Systems/Dungeon'
import { saveBattle } from '@/Helpers/Systems/Battle'

export const leaveDungeon = () => {
  saveDungeon(null)
  saveBattle(null)
}
