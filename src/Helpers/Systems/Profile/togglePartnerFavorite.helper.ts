import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const togglePartnerFavorite = () => {
  const { profile, setProfile } = useProfileStore.getState()
  const { digivice } = useDigiviceStore.getState()

  if (!profile || !digivice?.currentDetails) {
    return
  }

  const partnerId = digivice.currentDetails
  const currentDigimon = profile.partnerDigimons[partnerId]

  if (!currentDigimon) {
    return
  }

  setProfile({
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
