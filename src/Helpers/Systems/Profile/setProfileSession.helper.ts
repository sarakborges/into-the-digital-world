import type { ProfileType } from '@/Types/Profile.type'

import { updateGameSession } from '@/Systems/Session/GameSession'

import { useProfileStore } from '@/Stores/Profile.store'

type ProfileSessionUpdate =
  | ProfileType
  | ((profile: ProfileType) => ProfileType)

export const setProfileSession = (
  update: ProfileSessionUpdate
): boolean => {
  if (typeof update !== 'function') {
    updateGameSession({ profile: update })
    return true
  }

  const profile = useProfileStore.getState().profile

  if (!profile) {
    return false
  }

  updateGameSession({ profile: update(profile) })

  return true
}
