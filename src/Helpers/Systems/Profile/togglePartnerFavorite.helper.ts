import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'

export const togglePartnerFavorite = (): void => {
  const profile = useProfileStore.getState().profile
  const { digivice } = useDigiviceStore.getState()

  if (!profile || !digivice?.currentDetails) {
    return
  }

  const partnerId = digivice.currentDetails
  const currentDigimon = profile.partnerDigimons[partnerId]

  if (!currentDigimon) {
    return
  }

  setProfileSession({
    ...profile,

    partnerDigimons: {
      ...profile.partnerDigimons,

      [partnerId]: {
        ...currentDigimon,
        isFavorite: !currentDigimon.isFavorite
      }
    }
  })
}
