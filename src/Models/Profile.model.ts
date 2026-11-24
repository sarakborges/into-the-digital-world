import type { ProfileType } from '@/Types/Profile.type'

export const ProfileModel = {
  name: '',
  avatar: null,

  lastSave: new Date(),
  currentDialog: null,
  currentScene: null,

  currentTitle: 'chosenChild',
  titles: ['chosenChild']
} satisfies ProfileType
