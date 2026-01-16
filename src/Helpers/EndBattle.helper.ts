import type { PartyDigimon, WildDigimonType } from '@/Types/Digimon.type'
import type { ProfileType } from '@/Types/Profile.type'
import type { LootType } from '@/Types/Battle.type'

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

    newProfile.experience = (newProfile.experience || 0) + loot.exp

    newProfile.partners = [
      ...profile.partners!.map((partnerItem) => {
        if (!playerParty.includes(partnerItem.id)) {
          return partnerItem
        }

        return {
          ...partnerItem,
          experience: partnerItem.experience + loot.exp
        }
      })
    ]
  }

  localStorage.removeItem('battle')
  localStorage.setItem('profile', JSON.stringify(newProfile))

  return newProfile
}
