import { useProfileStore } from '@/Stores/Profile.store'

export const getProfileAvatar = () => {
  return useProfileStore.getState().profile?.avatar
}
