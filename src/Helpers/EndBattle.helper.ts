import type { PartyDigimon } from '@/Types/Digimon.type'
import type { ProfileType } from '@/Types/Profile.type'
import type { LootType } from '@/Types/Battle.type'

import {
  DIGIMON_LEVELS,
  DIGIMON_POINTS_PER_LEVEL,
  PLAYER_LEVELS,
  PLAYER_POINTS_PER_LEVEL
} from '@/Consts/Levels.const'
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
    const playerParty = digimons
      .filter((item) => item.party === 'player')
      .map((item) => item.id)

    for (let lootItem of loot.items) {
      if (lootItem.type === 'research') {
        profile.researches.push(lootItem.id)
        continue
      }

      const profileCoreIndex = profile.cores.findIndex(
        (profileCoreItem) => profileCoreItem.id === lootItem.id
      )

      const updatedCoresQuantity =
        Number(profile.cores?.[profileCoreIndex]?.quantity || 0) +
        (Number(lootItem.quantity) || 0)

      if (!profile.cores[profileCoreIndex]) {
        profile.cores.push({
          id: lootItem.id,
          quantity: updatedCoresQuantity,
          type: lootItem.type
        })
      }

      if (!!profile.cores[profileCoreIndex]) {
        profile.cores[profileCoreIndex].quantity = updatedCoresQuantity
      }
    }

    const playerExperience = (profile.experience || 0) + loot.exp
    const playerNextLevelExp = PLAYER_LEVELS[profile.level || 1].expToNextLevel

    if (playerExperience >= playerNextLevelExp) {
      profile.experience = playerExperience - playerNextLevelExp
      profile.level = (profile.level || 1) + 1
      profile.points = (profile.points || 0) + PLAYER_POINTS_PER_LEVEL
    } else {
      profile.experience = playerExperience
    }

    profile.partners = [
      ...profile.partners!.map((partnerItem) => {
        if (!playerParty.includes(partnerItem.id)) {
          return partnerItem
        }

        let digimonExperience = (partnerItem.experience || 0) + loot.exp
        let digimonLevel = partnerItem.level || 1
        let digimonPoints = partnerItem.points || 0
        const digimonNextLevelExp =
          DIGIMON_LEVELS[partnerItem.level || 1].expToNextLevel

        if (digimonExperience >= digimonNextLevelExp) {
          digimonExperience -= digimonNextLevelExp
          digimonLevel++
          digimonPoints += DIGIMON_POINTS_PER_LEVEL
        }

        return {
          ...partnerItem,
          experience: digimonExperience,
          level: digimonLevel,
          points: digimonPoints
        }
      })
    ]
  }

  localStorage.removeItem('battle')
  localStorage.setItem('profile', JSON.stringify(profile))

  return profile
}
