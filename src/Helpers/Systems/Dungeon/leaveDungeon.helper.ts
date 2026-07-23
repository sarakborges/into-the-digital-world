import { saveBattle } from '@/Helpers/Systems/Battle/saveBattle.helper'
import { saveDungeon } from '@/Helpers/Systems/Dungeon/saveDungeon.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

export const leaveDungeon = () => {
  saveDungeon(null)
  saveBattle(null)

  closeScene()
}
