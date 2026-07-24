import type { ProfileType } from '@/Types/Profile.type'

import { GAME_VERSION } from '@/Consts/Game.const'
import { getNpcsByCategory } from '@/GameData/Registries/Npc.registry'

import { startGameSession } from '@/Helpers/Systems/Profile/startGameSession.helper'

export const createNewProfile = () => {
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

  startGameSession({ profile })
}
