import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'

export const getCurrentParty = () => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return []
  }

  return profile.party.map((digimon, digimonIndex) => ({
    ...AllDigimons[profile.partnerDigimons[digimon].baseDigimon],

    name:
      profile.partnerDigimons[digimon].name ||
      AllDigimons[profile.partnerDigimons[digimon].baseDigimon].name,

    equipments: profile.partnerDigimons[digimon].equipments,

    party: 'allies' as 'allies' | 'enemies',
    index: digimonIndex
  }))
}
