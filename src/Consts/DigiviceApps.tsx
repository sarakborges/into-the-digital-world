import { Acquintances } from '@/Components/App/Acquintances'
import { AvatarCustomization } from '@/Components/App/AvatarCustomization'
import { PartnersList } from '@/Components/App/PartnersList'
import { PlayerProfile } from '@/Components/App/PlayerProfile'
import { Inventory } from '@/Components/App/Inventory'

export const APP_PROFILE = {
  id: 'profile',
  app: 'profile',
  component: <PlayerProfile />
}

export const APP_SAVE = {
  id: 'save',
  scene: 'saveGame'
}

export const APP_INVENTORY = {
  id: 'inventory',
  app: 'inventory',
  component: <Inventory />
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
  id: 'achievements'
}

export const APP_PARTNERSLIST = {
  id: 'partnersList',
  app: 'partnersList',
  component: <PartnersList />
}

export const APP_ACQUINTANCES = {
  id: 'acquintances',
  app: 'acquintances',
  component: <Acquintances />
}

export const APP_LOCATION = {
  id: 'location',
  scene: 'changeZone'
}

export const APP_JOURNAL = {
  id: 'journal'
}

export const AllApps = {
  profile: APP_PROFILE,
  fashion: APP_FASHION,
  // location: APP_LOCATION,
  // journal: APP_JOURNAL,
  encyclopedia: APP_PARTNERSLIST,
  acquintances: APP_ACQUINTANCES,
  inventory: APP_INVENTORY,
  // achievements: APP_ACHIEVEMENTS,
  save: APP_SAVE,
  logoff: APP_LOGOFF
}
