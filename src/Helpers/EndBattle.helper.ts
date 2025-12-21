import type { PartyDigimon } from '@/Types/Digimon.type'
import type { ProfileType } from '@/Types/Profile.type'

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

    enemyParty.forEach((enemyItem) => {
      const level = enemyItem.level
      const digimon = enemyItem.baseDigimon

      const attribute = digimon.attribute
      const families = digimon.families

      newProfile.cores.digimon[digimon.id] =
        (newProfile.cores?.family?.[digimon.id] || 0) + level

      newProfile.cores.attribute[attribute.id] =
        (newProfile.cores?.family?.[attribute.id] || 0) + level

      families.forEach((familyItem) => {
        newProfile.cores.family[familyItem.id] =
          (newProfile.cores?.family?.[familyItem.id] || 0) + level
      })
    })

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
