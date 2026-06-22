import {useProfileStore} from '@/Stores/Profile.store'

export const addToParty = (digimonId: number) => {
  const { profile, setProfile } = useProfileStore.getState()

  if (!profile) {
    return
  }

  setProfile({
    ...profile,
    party: [...profile.party, digimonId]
  })
}
