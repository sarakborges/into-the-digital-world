import { saveDungeon } from '@/Helpers/Systems/Dungeon'

export const leaveDungeon = () => {
  saveDungeon(null)
}
