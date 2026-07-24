import type { ProfileType } from '@/Types/Profile.type'

import { GAME_VERSION } from '@/Consts/Game.const'
import { getNpcsByCategory } from '@/GameData/Registries/Npc.registry'
import { Introduction001 } from '@/GameData/Scenes/Story/Introduction/001.scene'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const createNewProfile = () => {
  const { setProfile } = useProfileStore.getState()
  const { setDigivice } = useDigiviceStore.getState()
  const { setScene } = useSceneStore.getState()

  const profile = {
    gameVersion: GAME_VERSION,
    id: 0,
    name: '',
    lastSave: new Date().toISOString(),
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
      ...getNpcsByCategory('appmon')
    },

    currentLocation: {
      zone: 'rootDomain',
      map: 'restRoom',
      x: 2,
      y: 3
    }
  } satisfies ProfileType

  setProfile(profile)
  setDigivice({ isOpen: false })

  setScene({ component: Introduction001 })
}
