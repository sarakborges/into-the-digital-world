import type { ProfileType } from '@/Types/Profile.type'

import { AllDigimons } from '@/GameData/Digimons'

export const getPartnerGroups = (profile: ProfileType) => ({
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
})
