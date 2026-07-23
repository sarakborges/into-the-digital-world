import type { ProfileType } from '@/Types/Profile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { Introduction001 } from '@/GameData/Scenes/Story/Introduction/001.scene'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const createNewProfile = () => {
  const { setProfile } = useProfileStore.getState()
  const { setDigivice } = useDigiviceStore.getState()
  const { setScene } = useSceneStore.getState()

  const profile = {
    id: 0,
    name: '',
    lastSave: new Date(),
    currentTitle: 'chosenChild',
    currentScene: 'introduction',

    titles: ['chosenChild'],
    party: [],
    researches: [],
    researchesFound: [],
    dungeonsFound: [],

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
      x: 2,
      y: 3
    }
  } as ProfileType

  setProfile(profile)
  setDigivice({ isOpen: false })

  setScene({ component: Introduction001 })
}
