import type { BattleType } from '@/Types/Battle.type'
import type { LootType } from '@/Types/Loot.type'

import { generateRandomNumber } from '@/Helpers/Math/generateRandomNumber.helper'

export const generateBattleLoot = (battle: BattleType): LootType => {
  const loot: LootType = {}

  if (!battle.turnOrder.some((digimon) => digimon.party === 'allies')) {
    return loot
  }

  for (const digimon of battle.turnOrder.filter(
    (entry) => entry.party === 'enemies'
  )) {
    for (const item of digimon.lootTable ?? []) {
      const rng = generateRandomNumber({ min: 0, max: 100 })

      if (rng < item.dropChance) {
        loot[item.itemId] = (loot[item.itemId] ?? 0) + item.amount
      }
    }
  }

  return loot
}
