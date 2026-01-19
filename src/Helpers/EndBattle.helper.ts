import type { PartyDigimon } from '@/Types/Digimon.type'
import type { ProfileType } from '@/Types/Profile.type'
import type { LootType } from '@/Types/Battle.type'

import {
  DIGIMON_LEVELS,
  DIGIMON_POINTS_PER_LEVEL,
  PLAYER_LEVELS,
  PLAYER_POINTS_PER_LEVEL
} from '@/Consts/Levels.const'

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

  const newProfile = {
    ...profile,
    seenDigimon: [...seenDigimon]
  }

  if (!!loot) {
    const playerParty = digimons
      .filter((item) => item.party === 'player')
      .map((item) => Number(item.id))

    const coreTypes = ['attribute', 'family']

    for (let coreType of coreTypes) {
      if (!loot.cores[coreType]) {
        continue
      }

      for (let coreItem of Object.keys(loot.cores[coreType])) {
        const newCoresQuantity =
          (Number(newProfile.cores?.[coreType]?.[coreItem]) || 0) +
          (Number(loot.cores[coreType][coreItem]) || 0)

        newProfile.cores[coreType][coreItem] = newCoresQuantity
      }
    }

    const playerExperience = (newProfile.experience || 0) + loot.exp
    const playerNextLevelExp =
      PLAYER_LEVELS[newProfile.level || 1].expToNextLevel

    if (playerExperience >= playerNextLevelExp) {
      newProfile.experience = playerExperience - playerNextLevelExp
      newProfile.level = (newProfile.level || 1) + 1
      newProfile.points = (newProfile.points || 0) + PLAYER_POINTS_PER_LEVEL
    } else {
      newProfile.experience = playerExperience
    }

    newProfile.partners = [
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
  localStorage.setItem('profile', JSON.stringify(newProfile))

  return newProfile
}
