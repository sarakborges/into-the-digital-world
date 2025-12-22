import type { PartyDigimon, WildDigimonType } from '@/Types/Digimon.type'
import type { ProfileType } from '@/Types/Profile.type'
import { randomNumber } from './RandomNumber.helper'

export const endBattleHelper = ({
  profile,
  winner,
  digimons
}: {
  profile: ProfileType
  winner?: 'player' | 'enemy'
  digimons: Array<PartyDigimon>
}) => {
  const seenDigimon = new Set([
    ...(profile.seenDigimon || []),
    ...digimons.map((item) => item.baseDigimon.id)
  ])

  const newProfile = {
    ...profile,
    seenDigimon: [...seenDigimon]
  }

  if (winner === 'player') {
    const playerParty = digimons
      .filter((item) => item.party === 'player')
      .map((item) => Number(item.id))

    const enemyParty = digimons.filter((item) => item.party === 'enemy')
    const expGained = enemyParty.reduce((acc, item) => acc + item.level, 0)

    for (let enemyItem in enemyParty) {
      const enemy = enemyParty[enemyItem] as WildDigimonType
      const lootTable = enemy.lootTable

      for (let lootItem in lootTable) {
        const loot = enemy.lootTable?.[lootItem]

        if (loot.type === 'core') {
          const lootQuantity = randomNumber({
            ...loot.quantity
          })

          const newCoresQuantity =
            (newProfile.cores?.[loot.coreType]?.[loot.coreName] || 0) +
            lootQuantity

          newProfile.cores[loot.coreType][loot.coreName] = newCoresQuantity
        }
      }
    }

    newProfile.experience = (newProfile.experience || 0) + expGained

    newProfile.partners = [
      ...profile.partners!.map((item) => {
        if (!playerParty.includes(item.id)) {
          return item
        }

        return {
          ...item,
          experience: item.experience + expGained
        }
      })
    ]
  }

  localStorage.removeItem('battle')
  localStorage.setItem('profile', JSON.stringify(newProfile))

  return newProfile
}
