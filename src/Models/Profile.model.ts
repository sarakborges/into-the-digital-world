import type { ProfileType } from '@/Types/Profile.type'

import { AllNpcs } from '@/GameData/Npcs'

export const ProfileModel = {
  lastSave: new Date(),
  currentScene: null,
  currentDialog: null,

  currentTitle: 'chosenChild',
  titles: ['chosenChild'],

  npcAcquaintances: [...Object.keys(AllNpcs.appmon)],

  currentLocation: {
    zone: 'rootDomain',
    map: 'restRoom'
  }
} satisfies ProfileType
