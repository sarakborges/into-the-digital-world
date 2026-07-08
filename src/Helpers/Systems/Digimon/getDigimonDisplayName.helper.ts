import { useProfileStore } from '@/Stores/Profile.store'

export const getDigimonDisplayName = (digimonId: number): string => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return ''
  }

  const partner = profile.partnerDigimons[digimonId]

  return partner?.name || ''
}
