import { BattleAttack } from '@/GameData/Scenes/Apps/Battle/BattleAttack.scene'
import { BattleEnd } from '@/GameData/Scenes/Apps/Battle/BattleEnd.scene'
import { BattleStart } from '@/GameData/Scenes/Apps/Battle/BattleStart.scene'
import { BattleTurn } from '@/GameData/Scenes/Apps/Battle/BattleTurn.scene'

export const BattleScenes = {
  start: { component: BattleStart },
  turn: { component: BattleTurn },
  attack: { component: BattleAttack },
  end: { component: BattleEnd }
}
