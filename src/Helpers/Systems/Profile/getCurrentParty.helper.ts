import { getDigimon } from '@/GameData/Registries/Digimon.registry'

import { useProfileStore } from '@/Stores/Profile.store'

export const getCurrentParty = () => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return []
  }

  return profile.party.map((digimonId, digimonIndex) => {
    const partner = profile.partnerDigimons[digimonId]
    const baseDigimon = getDigimon(partner.baseDigimon)

    return {
      ...baseDigimon,
      name: partner.name || baseDigimon.name,
      equipments: partner.equipments,
      party: 'allies' as 'allies' | 'enemies',
      index: digimonIndex
    }
  })
}
