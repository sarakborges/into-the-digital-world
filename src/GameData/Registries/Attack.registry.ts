import type { AttackType } from '@/Types/Attack.type'

import { AcidBubblesAttack } from '@/GameData/Attacks/AcidBubbles.attack'
import { BubblesAttack } from '@/GameData/Attacks/Bubbles.attack'
import { MetalDropAttack } from '@/GameData/Attacks/MetalDrop.attack'
import { PoisonBubblesAttack } from '@/GameData/Attacks/PoisonBubbles.attack'
import { TackleAttack } from '@/GameData/Attacks/Tackle.attack'

const AttackRegistry = {
  tackle: TackleAttack,
  bubbles: BubblesAttack,
  acidBubbles: AcidBubblesAttack,
  poisonBubbles: PoisonBubblesAttack,
  metalDrop: MetalDropAttack
} satisfies Record<string, AttackType>

export type AttackId = Extract<keyof typeof AttackRegistry, string>

export const findAttack = (attackId: string): AttackType | undefined => {
  return Object.values(AttackRegistry).find((attack) => attack.id === attackId)
}

export const getAttack = (attackId: string): AttackType => {
  const attack = findAttack(attackId)

  if (!attack) {
    throw new Error(`Unknown attack: ${attackId}`)
  }

  return attack
}

export const getAttackIds = (): string[] => {
  return Object.values(AttackRegistry).map((attack) => attack.id)
}
