import type { ProfileType } from '@/Types/Profile.type'

import { AllNpcs } from '@/GameData/Npcs'

export const createNewProfile = (): ProfileType => {
  return {
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
}
