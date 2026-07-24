import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'

export const togglePartnerFavorite = (partnerId: number): void => {
  setProfileSession((profile) => {
    const partner = profile.partnerDigimons[partnerId]

    if (!partner) {
      return profile
    }

    return {
      ...profile,
      partnerDigimons: {
        ...profile.partnerDigimons,
        [partnerId]: {
          ...partner,
          isFavorite: !partner.isFavorite
        }
      }
    }
  })
}
