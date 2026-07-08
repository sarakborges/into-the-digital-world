import { PoisonBubblesAttack } from './PoisonBubbles.attack'
import { AcidBubblesAttack } from './AcidBubbles.attack'
import type { AttackType } from '@/Types/Attack.type'
import { MetalDropAttack } from './MetalDrop.attack'
import { BubblesAttack } from './Bubbles.attack'
import { TackleAttack } from './Tackle.attack'

export const AllAttacks: Record<string, AttackType> = {
  tackle: TackleAttack,
  bubbles: BubblesAttack,
  acidBubbles: AcidBubblesAttack,
  poisonBubbles: PoisonBubblesAttack,
  metalDrop: MetalDropAttack
}
