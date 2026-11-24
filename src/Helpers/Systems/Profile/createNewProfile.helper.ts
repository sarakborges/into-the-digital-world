import { ProfileModel } from '@/Models/Profile.model'

import { transitionGame } from '@/Helpers/Systems/Game'
import { getNewId } from './getNewId.helper'
import { saveGame } from './saveGame.helper'

import { useDialogStore } from '@/Stores/Dialog.store'
import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const createNewProfile = () => {
  const profile = {
    ...ProfileModel,
    id: getNewId(),
    currentScene: 'rootDomainDorms'
  }

  transitionGame(() => {
    sessionStorage.setItem('itdw_profile', String(profile.id))

    useProfileStore.getState().setProfile(profile)
    saveGame()

    useGameStore.getState().setGame({
      isTransitioning: true,
      hasGameStarted: true
    })
    useDialogStore.getState().setDialog(null)
    useSceneStore.getState().setScene('rootDomainDorms')
  })
}
