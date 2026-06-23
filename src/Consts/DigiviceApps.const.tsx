import { AppAcquaintances } from '@/Components/Digivice/Apps/AppAcquaintances/List'
import { AppPartnersList } from '@/Components/Digivice/Apps/AppPartners/List'
import { AppInventory } from '@/Components/Digivice/Apps/AppInventory'
import { AppResearchesList } from '@/Components/Digivice/Apps/AppResearchesList'
import { AppLocation } from '@/Components/Digivice/Apps/AppLocation'
import { AppQuestsLog } from '@/Components/Digivice/Apps/AppQuestsLog'
import { AppMap } from '@/Components/Digivice/Apps/AppMap'

export const APP_SAVE = {
  id: 'save',
  scene: 'saveGame'
}

export const APP_INVENTORY = {
  id: 'inventory',
  app: 'inventory',
  component: <AppInventory />
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
  component: <AppPartnersList />
}

export const APP_RESEARCHESLIST = {
  id: 'researchesList',
  app: 'researchesList',
  component: <AppResearchesList />
}

export const APP_ACQUAINTANCES = {
  id: 'acquaintances',
  app: 'acquaintances',
  component: <AppAcquaintances />
}

export const APP_LOCATION = {
  id: 'location',
  app: 'location',
  component: <AppLocation />
}

export const APP_MAP = {
  id: 'map',
  app: 'map',
  component: <AppMap />
}

export const APP_JOURNAL = {
  id: 'journal',
  app: 'journal',
  component: <AppQuestsLog />
}

export const AllApps = {
  inventory: APP_INVENTORY,
  location: APP_LOCATION,
  journal: APP_JOURNAL,
  map: APP_MAP,
  acquaintances: APP_ACQUAINTANCES,
  researchesList: APP_RESEARCHESLIST,
  partnersList: APP_PARTNERSLIST,
  achievements: APP_ACHIEVEMENTS,
  save: APP_SAVE,
  logoff: APP_LOGOFF
}

export const DigiviceApps = {
  inventory: APP_INVENTORY,
  journal: APP_JOURNAL,
  acquaintances: APP_ACQUAINTANCES,
  partnersList: APP_PARTNERSLIST,
  map: APP_MAP,
  save: APP_SAVE,
  logoff: APP_LOGOFF
}
