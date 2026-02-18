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
  const seenDigimon = new Set([
    ...(profile.seenDigimon || []),
    ...digimons.map((item) => item.baseDigimon.id)
  ])

  const enemyParty = digimons.filter((item) => item.party === 'enemy')

  for (let enemy of enemyParty) {
    profile.activeQuests = progressQuests(enemy)?.quests
  }

  const updatedProfile = {
    ...profile,
    seenDigimon: [...seenDigimon]
  }

  if (!!loot) {
    const playerParty = digimons
      .filter((item) => item.party === 'player')
      .map((item) => item.id)

    for (let coreItem of loot.cores) {
      const profileCoreIndex = updatedProfile.cores.findIndex(
        (profileCoreItem) => profileCoreItem.coreId === coreItem.coreId
      )

      const updatedCoresQuantity =
        Number(updatedProfile.cores?.[profileCoreIndex]?.quantity || 0) +
        (Number(coreItem.quantity) || 0)

      if (!updatedProfile.cores[profileCoreIndex]) {
        updatedProfile.cores.push({
          coreId: coreItem.coreId,
          quantity: updatedCoresQuantity,
          coreType: coreItem.coreType
        })
      }

      if (!!updatedProfile.cores[profileCoreIndex]) {
        updatedProfile.cores[profileCoreIndex].quantity = updatedCoresQuantity
      }
    }

    const playerExperience = (updatedProfile.experience || 0) + loot.exp
    const playerNextLevelExp =
      PLAYER_LEVELS[updatedProfile.level || 1].expToNextLevel

    if (playerExperience >= playerNextLevelExp) {
      updatedProfile.experience = playerExperience - playerNextLevelExp
      updatedProfile.level = (updatedProfile.level || 1) + 1
      updatedProfile.points =
        (updatedProfile.points || 0) + PLAYER_POINTS_PER_LEVEL
    } else {
      updatedProfile.experience = playerExperience
    }

    updatedProfile.partners = [
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
  localStorage.setItem('profile', JSON.stringify(updatedProfile))

  return updatedProfile
}
