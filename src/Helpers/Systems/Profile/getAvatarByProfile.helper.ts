import type { AvatarType } from '@/Types/Avatar.type'

import { useProfileStore } from '@/Stores/Profile.store'

export const getAvatarByProfile = (): AvatarType | undefined => {
  const { profile } = useProfileStore.getState()

  return profile?.avatar ?? undefined
}
