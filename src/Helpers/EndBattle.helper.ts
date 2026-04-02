import type { PartyDigimon } from '@/Types/Digimon.type'
import type { ProfileType } from '@/Types/Profile.type'
import type { LootType } from '@/Types/Battle.type'

import { progressQuests } from './ProgressQuests.helper'

export const endBattleHelper = ({
  profile,
  digimons,
  loot
}: {
  profile: ProfileType
  digimons: Array<PartyDigimon>
  loot?: LootType
}) => {
  const enemyParty = digimons.filter((item) => item.party === 'enemy')

  for (let enemy of enemyParty) {
    if (!profile.quests?.inProgress) {
      continue
    }

    profile.quests.inProgress = progressQuests(enemy)?.quests
  }

  if (!!loot) {
    for (let lootItem of Object.values(loot.items)) {
      if (!lootItem.quantity) {
        continue
      }

      if (lootItem.type === 'research') {
        profile.researches.push(lootItem.id)
        continue
      }

      if (lootItem.type === 'core') {
        const updatedCoresQuantity =
          (profile.cores?.[lootItem.id] || 0) + (lootItem.quantity || 0)

        profile.cores[lootItem.id] = updatedCoresQuantity
      }
    }
  }

  localStorage.removeItem('battle')
  localStorage.setItem('profile', JSON.stringify(profile))

  return profile
}
