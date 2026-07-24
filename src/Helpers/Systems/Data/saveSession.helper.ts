import type { ProfileType } from '@/Types/Profile.type'

import { setGameSessionValue } from '@/Helpers/Systems/Data/setGameSessionValue.helper'

export const saveSession = (profile: ProfileType): void => {
  setGameSessionValue({ key: 'profile', value: profile })
}
