import type { ProfileType } from '@/Types/Profile.type'

import { AllZones } from '@/GameData/Zones'
import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/getTexts.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'
import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'

import { Button } from '@/Components/System/Button'

import './NewGame.style.scss'

export const NewGame = () => {
  const { savedProfiles, setSavedProfiles } = useSavedProfiles()
  const { setProfile } = useProfile()
  const { setDigivice } = useDigivice()
  const { scene, setScene } = useScene()

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
      currentParty: [],
      items: {},
      meaningfulChoices: {},
      npcAcquintances: {
        ...AllNpcs.appmon
      },
      partnerDigimons: {},
      doneScenes: [],
      titles: ['chosenChild'],

      currentZone: {
        id: AllZones.rootDomainRestRoom1({ scene: scene! }).id,
        x: 3,
        y: 5
      }
    }

    const currentScene = {
      currentScene: 'introduction',
      currentStage: '001'
    }

    setSavedProfiles([...sortedProfiles, newProfile])

    setProfile(newProfile)
    setScene(currentScene)
    setDigivice({ isOpen: false })
    saveSession({ key: 'profile', value: newProfile })
  }

  return (
    <div className="new-game">
      <Button onClick={createNewProfile}>{getTexts('START_NEW_GAME')}</Button>
    </div>
  )
}
