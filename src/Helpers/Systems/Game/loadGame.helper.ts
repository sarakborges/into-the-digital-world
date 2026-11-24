import { loadProfile } from '@/Helpers/Systems/Profile'

import { transitionGame } from './transitionGame.helper'

export const loadGame = (profileId: number) => {
  transitionGame(() => {
    sessionStorage.setItem('itdw_profile', String(profileId))
    loadProfile()
  })
}
