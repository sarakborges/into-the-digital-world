import * as Zones from '@/GameData/Zones'

import type { ProfileType } from '@/Types/Profile.type'

import { getTexts } from '@/Helpers/getTexts.helper'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'
import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import { Button } from '@/Components/System/Button'

import './NewGame.style.scss'
import { saveSession } from '@/Helpers/saveSession.helper'

export const NewGame = () => {
  const { savedProfiles } = useSavedProfiles()
  const { setProfile } = useProfile()
  const { setScene } = useScene()

  const createNewProfile = () => {
    const sortedProfiles = [...(savedProfiles || [])].sort(
      (a, b) => b.id - a.id
    )

    const newId = (sortedProfiles?.[0]?.id ?? 0) + 1

    const newProfile: ProfileType = {
      id: newId,
      name: '',
      lastSave: '',

      currentScene: 'introduction',

      currentZone: {
        id: Zones.RootDomainRestRoom1.id,
        x: 3,
        y: 5
      },

      npcAcquintances: {}
    }

    const currentScene = { currentScene: 'introduction', currentStage: '001' }

    setProfile(newProfile)
    setScene(currentScene)
    saveSession({ key: 'profile', value: newProfile })
  }

  return (
    <div className="new-game">
      <Button onClick={createNewProfile}>{getTexts('START_NEW_GAME')}</Button>
    </div>
  )
}
