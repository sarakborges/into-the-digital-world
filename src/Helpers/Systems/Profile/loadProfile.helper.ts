import { ProfileModel } from '@/Models/Profile.model'

import { loadData, loadSession } from '@/Helpers/Systems/Data'

import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useSettingsStore } from '@/Stores/Settings.store'

export const loadProfile = () => {
  const { setGame } = useGameStore.getState()
  const { setProfile } = useProfileStore.getState()
  const { setSettings } = useSettingsStore.getState()
  const { setScene } = useSceneStore.getState()

  try {
    const profileId = loadSession(`profile`)

    if (!profileId) {
      setProfile({ ...ProfileModel, currentScene: 'startScreen' })
      setScene('startScreen')
      return
    }

    const loadedProfile = loadData(`profile${profileId}`)

    setGame({
      hasGameStarted: true
    })

    setProfile(loadedProfile)
    setScene(loadedProfile.currentScene)
    setSettings(loadData('settings'))
  } catch (error) {
    console.warn(`Error loading game session: ${error}`)
  }
}
