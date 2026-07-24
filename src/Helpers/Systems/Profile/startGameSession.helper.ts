import type { ProfileType } from '@/Types/Profile.type'

import { readStoredProfile } from '@/Systems/Save/Save.storage'

import { Introduction001 } from '@/GameData/Scenes/Story/Introduction/001.scene'

import { clearGameSession } from '@/Helpers/Systems/Data/clearGameSession.helper'
import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'
import { openCurrentTileScene } from '@/Helpers/Systems/Zones/openCurrentTileScene.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

type StartGameSessionOptions =
  | { profile: ProfileType }
  | { profileId: number }

export const startGameSession = (
  options: StartGameSessionOptions
): void => {
  const isNewGame = 'profile' in options
  const profile = isNewGame
    ? options.profile
    : readStoredProfile(options.profileId)

  if (!profile) {
    return
  }

  clearGameSession()
  saveSession(profile)

  const { setDigivice } = useDigiviceStore.getState()
  setDigivice({ isOpen: false })

  if (isNewGame) {
    const { setScene } = useSceneStore.getState()
    setScene({ component: Introduction001 })
    return
  }

  openCurrentTileScene()
}
