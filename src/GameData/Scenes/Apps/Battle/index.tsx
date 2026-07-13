import { BattleAttack } from './BattleAttack.scene'
import { BattleEnd } from './BattleEnd.scene'
import { BattleStart } from './BattleStart.scene'
import { BattleTurn } from './BattleTurn.scene'

export const BattleScenes = {
  start: { component: BattleStart },
  turn: { component: BattleTurn },
  attack: { component: BattleAttack },
  end: { component: BattleEnd }
}
