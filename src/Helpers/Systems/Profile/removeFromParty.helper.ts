import { useProfileStore } from '@/Stores/Profile.store'

export const removeFromParty = (digimonId: number) => {
  const { profile, setProfile } = useProfileStore.getState()

  if (!profile) {
    return
  }

  setProfile({
    ...profile,
    party: profile.party.filter((partner) => partner !== digimonId) ?? []
  })
}
