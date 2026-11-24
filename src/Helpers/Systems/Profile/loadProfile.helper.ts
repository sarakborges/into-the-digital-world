import { ProfileModel } from '@/Models/Profile.model'

import { loadData, loadSession } from '@/Helpers/Systems/Data'

import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useProfileItemsStore } from '@/Stores/ProfileItems.store'
import { useProfileMeaningfulChoicesStore } from '@/Stores/ProfileMeaningfulChoices.store'
import { useProfilePartnerDigimonsStore } from '@/Stores/ProfilePartnerDigimons.store'
import { useProfilePartyStore } from '@/Stores/ProfileParty.store'
import { useProfileQuestsStore } from '@/Stores/ProfileQuests.store'
import { useProfileTitlesStore } from '@/Stores/ProfileTitles.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useSettingsStore } from '@/Stores/Settings.store'

export const loadProfile = () => {
  const { setGame } = useGameStore.getState()
  const { setProfile } = useProfileStore.getState()
  const { setSettings } = useSettingsStore.getState()
  const { setScene } = useSceneStore.getState()

  const { setProfileMeaningfulChoices } =
    useProfileMeaningfulChoicesStore.getState()
  const { setProfileItems } = useProfileItemsStore.getState()
  const { setProfilePartnerDigimons } =
    useProfilePartnerDigimonsStore.getState()
  const { setProfileParty } = useProfilePartyStore.getState()
  const { setProfileTitles } = useProfileTitlesStore.getState()
  const { setProfileQuests } = useProfileQuestsStore.getState()

  try {
    const profileId = loadSession(`profile`)

    if (!profileId) {
      setProfile({ ...ProfileModel, currentScene: 'startScreen' })
      setScene('startScreen')
      return
    }

    const loadedProfile = loadData(`profile${profileId}`)

    setProfileMeaningfulChoices(
      loadData(`profileMeaningfulChoices${profileId}`)
    )
    setProfileItems(loadData(`profileItems${profileId}`))
    setProfilePartnerDigimons(loadData(`profilePartnerDigimons${profileId}`))
    setProfileParty(loadData(`profileParty${profileId}`))
    setProfileTitles(loadData(`profileTitles${profileId}`))
    setProfileQuests(loadData(`profileQuests${profileId}`))

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
