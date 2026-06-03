import type { ProfileType } from '@/Types/Profile.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/getTexts.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

import { Button } from '@/Components/System/Button'

import './NewGame.style.scss'

export const NewGame = () => {
  const savedProfiles = useSavedProfilesStore((state) => state.savedProfiles)
  const setSavedProfiles = useSavedProfilesStore(
    (state) => state.setSavedProfiles
  )

  const setProfile = useProfileStore((state) => state.setProfile)
  const setDigivice = useDigiviceStore((state) => state.setDigivice)
  const setScene = useSceneStore((state) => state.setScene)

  const createNewProfile = () => {
    const sortedProfiles = [...(savedProfiles || [])].sort(
      (a, b) => b.id - a.id
    )

    const newId = (sortedProfiles?.[0]?.id ?? 0) + 1

    const newProfile: ProfileType = {
      id: newId,
      name: '',
      lastSave: '',
      currentTitle: 'chosenChild',
      currentScene: 'introduction',

      party: [],
      doneScenes: [],
      titles: ['chosenChild'],
      researches: [],

      quests: {
        current: {},
        done: {}
      },
      items: {},
      meaningfulChoices: {},
      partnerDigimons: {},

      npcAcquintances: {
        ...AllNpcs.appmon
      },

      currentZone: {
        id: 'rootDomain',
        map: 'restRoom1',
        x: 3,
        y: 5
      }
    }

    setSavedProfiles([...sortedProfiles, newProfile])

    setProfile(newProfile)
    setDigivice({ isOpen: false })

    setScene({
      currentScene: 'introduction',
      currentStage: '001'
    })
  }

  return (
    <div className="new-game">
      <Button onClick={createNewProfile}>{getTexts('START_NEW_GAME')}</Button>
    </div>
  )
}
