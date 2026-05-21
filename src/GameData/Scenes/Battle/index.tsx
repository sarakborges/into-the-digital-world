import { BattleAttack } from './BattleAttack.scene'
import { BattleStart } from './BattleStart.scene'
import { BattleTurn } from './BattleTurn.scene'
import { BattleEnd } from './BattleEnd.scene'
import { BattleEpilogue } from './BattleEpilogue.scene'

export const BattleScenes = {
  id: 'Battle',
  start: BattleStart,
  turn: BattleTurn,
  attack: BattleAttack,
  end: BattleEnd,
  epilogue: BattleEpilogue
}
