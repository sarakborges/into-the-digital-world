import { Acquintances } from '@/Components/App/Acquintances'
import { AvatarCustomization } from '@/Components/App/AvatarCustomization'
import { PlayerProfile } from '@/Components/App/PlayerProfile'

export const APP_PROFILE = {
  id: 'profile',
  app: 'profile',
  scene: 'profile',
  component: <PlayerProfile />
}

export const APP_SAVE = {
  id: 'save',
  scene: 'saveGame'
}

export const APP_FASHION = {
  id: 'fashion',
  app: 'fashion',
  scene: 'avatarCustomization',
  component: <AvatarCustomization />
}

export const APP_LOGOFF = {
  id: 'logoff',
  scene: 'logoff'
}

export const APP_ACHIEVEMENTS = {
  id: 'achievements',
  scene: 'achievements'
}

export const APP_ACQUINTANCES = {
  id: 'acquintances',
  scene: 'acquintances',
  app: 'acquintances',
  component: <Acquintances />
}

export const APP_LOCATION = {
  id: 'location',
  scene: 'changeZone'
}

export const APP_JOURNAL = {
  id: 'journal',
  scene: 'questsLog'
}

export const AllApps = {
  profile: APP_PROFILE,
  fashion: APP_FASHION,
  // location: APP_LOCATION,
  // journal: APP_JOURNAL,
  acquintances: APP_ACQUINTANCES,
  // achievements: APP_ACHIEVEMENTS,
  save: APP_SAVE,
  logoff: APP_LOGOFF
}
