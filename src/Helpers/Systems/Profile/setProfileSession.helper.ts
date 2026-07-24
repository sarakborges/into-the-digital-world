import type { ProfileType } from '@/Types/Profile.type'

import { setGameSessionValue } from '@/Helpers/Systems/Data/setGameSessionValue.helper'

import { useProfileStore } from '@/Stores/Profile.store'

type ProfileSessionUpdate =
  | ProfileType
  | ((profile: ProfileType) => ProfileType)

export const setProfileSession = (
  update: ProfileSessionUpdate
): boolean => {
  if (typeof update !== 'function') {
    setGameSessionValue({ key: 'profile', value: update })
    return true
  }

  const profile = useProfileStore.getState().profile

  if (!profile) {
    return false
  }

  setGameSessionValue({
    key: 'profile',
    value: update(profile)
  })

  return true
}
