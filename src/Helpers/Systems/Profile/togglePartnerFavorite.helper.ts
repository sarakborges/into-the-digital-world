import {useDigiviceStore} from '@/Stores/Digivice.store'
import {useProfileStore} from '@/Stores/Profile.store'

export const togglePartnerFavorite = () => {
  const { profile, setProfile } = useProfileStore.getState()
  const { digivice } = useDigiviceStore.getState()

  if (!profile || !digivice?.currentDetails) {
    return
  }

  const currentDigimon = {
    ...profile.partnerDigimons[digivice?.currentDetails]
  }

  setProfile({
    ...profile,

    partnerDigimons: {
      ...profile.partnerDigimons,

      [digivice.currentDetails as string]: {
        ...currentDigimon,
        isFavorite: !currentDigimon.isFavorite
      }
    }
  })
}
