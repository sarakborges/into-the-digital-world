import { BattleAttack } from './BattleAttack.scene'
import { BattleEnd } from './BattleEnd.scene'
import { BattleStart } from './BattleStart.scene'
import { BattleTurn } from './BattleTurn.scene'

export const BattleScenes = {
  id: 'battle',
  start: BattleStart,
  turn: BattleTurn,
  attack: BattleAttack,
  end: BattleEnd
}
