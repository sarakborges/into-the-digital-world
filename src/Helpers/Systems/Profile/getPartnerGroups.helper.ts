import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import { getDigimon } from '@/GameData/Registries/Digimon.registry'

import { useProfileStore } from '@/Stores/Profile.store'

type PartnerWithBaseDigimonType = Omit<PartnerDigimonType, 'baseDigimon'> & {
  baseDigimon: BaseDigimonType
}

type PartnerGroupType = {
  inParty: Array<PartnerWithBaseDigimonType>
  others: Array<PartnerWithBaseDigimonType>
}

export const getPartnerGroups = (): PartnerGroupType => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return { inParty: [], others: [] }
  }

  return {
    inParty: profile.party.flatMap((digimonId) => {
      const partner = profile.partnerDigimons[digimonId]

      return partner
        ? [
            {
              ...partner,
              baseDigimon: getDigimon(partner.baseDigimon)
            }
          ]
        : []
    }),

    others: Object.values(profile.partnerDigimons)
      .filter((partner) => !profile.party.includes(partner.id))
      .map((partner) => ({
        ...partner,
        baseDigimon: getDigimon(partner.baseDigimon)
      }))
  }
}
