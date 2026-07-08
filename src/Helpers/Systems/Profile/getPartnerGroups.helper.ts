import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'

export const getPartnerGroups = (): { inParty: any[]; others: any[] } => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return { inParty: [], others: [] }
  }

  return {
    inParty: profile.party.map((digimon) => ({
      ...profile.partnerDigimons[digimon],
      baseDigimon: AllDigimons[profile.partnerDigimons[digimon].baseDigimon]
    })),

    others: Object.values(profile.partnerDigimons)
      .filter((partner) => !profile.party.includes(partner.id))
      .map((partner) => ({
        ...partner,
        baseDigimon: AllDigimons[partner.baseDigimon]
      }))
  }
}
