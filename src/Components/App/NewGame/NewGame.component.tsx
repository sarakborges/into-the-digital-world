import type { ProfileType } from '@/Types/Profile.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

import { Button } from '@/Components/System/Button'

import './NewGame.style.scss'

export const NewGame = () => {
  const { savedProfiles, setSavedProfiles } = useSavedProfilesStore(
    (state) => state
  )
  const { setProfile } = useProfileStore((state) => state)
  const { setDigivice } = useDigiviceStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

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
      titles: ['chosenChild'],
      researches: [],

      quests: {},
      items: {},
      meaningfulChoices: {},
      partnerDigimons: {},

      npcAcquaintances: {
        ...AllNpcs.appmon
      },

      currentZone: {
        id: 'rootDomain',
        map: 'restRoom',
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
