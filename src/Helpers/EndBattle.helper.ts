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
    const expGained = digimons
      .filter((item) => item.party === 'enemy')
      .reduce((acc, item) => acc + item.level, 0)

    newProfile.experience = (newProfile.experience || 0) + expGained

    const playerParty = digimons
      .filter((item) => item.party === 'player')
      .map((item) => Number(item.id))

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

  localStorage.setItem('profile', JSON.stringify(newProfile))
  localStorage.removeItem('battle')

  return newProfile
}
