import type { PartyDigimon, WildDigimonType } from '@/Types/Digimon.type'
import type { ProfileType } from '@/Types/Profile.type'
import type { LootType } from '@/Types/Battle.type'
import { DIGIMON_LEVELS, PLAYER_LEVELS } from '@/Consts/Levels.const'

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

    const newPlayerExperience = (newProfile.experience || 0) + loot.exp
    const playerNextLevelExp =
      PLAYER_LEVELS[newProfile.level || 1].expToNextLevel

    if (playerNextLevelExp < newPlayerExperience) {
      newProfile.experience = newPlayerExperience - playerNextLevelExp
      newProfile.level = (newProfile.level || 1) + 1
      newProfile.points = (newProfile.points || 0) + 1
    } else {
      newProfile.experience = newPlayerExperience
    }

    newProfile.partners = [
      ...profile.partners!.map((partnerItem) => {
        if (!playerParty.includes(partnerItem.id)) {
          return partnerItem
        }

        let newDigimonExperience = partnerItem.experience + loot.exp
        let newDigimonLevel = partnerItem.level || 1
        let newDigimonPoints = partnerItem.points || 0
        const digimonNextLevelExp =
          DIGIMON_LEVELS[partnerItem.level || 1].expToNextLevel

        if (digimonNextLevelExp < newDigimonExperience) {
          newDigimonExperience -= digimonNextLevelExp
          newDigimonLevel++
          newDigimonPoints += 3
        }

        return {
          ...partnerItem,
          experience: newDigimonExperience,
          level: newDigimonLevel,
          points: newDigimonPoints
        }
      })
    ]
  }

  localStorage.removeItem('battle')
  localStorage.setItem('profile', JSON.stringify(newProfile))

  return newProfile
}
