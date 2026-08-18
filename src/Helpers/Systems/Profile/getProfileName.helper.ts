import { useProfileStore } from '@/Stores/Profile.store'

export const getProfileName = () => {
  return useProfileStore.getState().profile?.name || ''
}
