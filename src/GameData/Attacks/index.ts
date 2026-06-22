import {BubblesAttack} from './Bubbles.attack'
import {AcidBubblesAttack} from './AcidBubbles.attack'
import {PoisonBubblesAttack} from './PoisonBubbles.attack'
import {TackleAttack} from './Tackle.attack'
import {MetalDropAttack} from './MetalDrop.attack'

export const AllAttacks = {
  tackle: TackleAttack,
  bubbles: BubblesAttack,
  acidBubbles: AcidBubblesAttack,
  poisonBubbles: PoisonBubblesAttack,
  metalDrop: MetalDropAttack
}
