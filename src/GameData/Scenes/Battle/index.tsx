import {BattleAttack} from './BattleAttack.scene'
import {BattleStart} from './BattleStart.scene'
import {BattleTurn} from './BattleTurn.scene'
import {BattleEnd} from './BattleEnd.scene'

export const BattleScenes = {
  id: 'battle',
  start: BattleStart,
  turn: BattleTurn,
  attack: BattleAttack,
  end: BattleEnd
}
