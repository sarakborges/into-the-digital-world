import { Acquaintances } from '@/Components/App/Acquaintances'
import { PartnersList } from '@/Components/App/PartnersList'
import { Inventory } from '@/Components/App/Inventory'
import { MyResearchesList } from '@/Components/App/MyResearchesList'
import { Location } from '@/Components/App/Location'
import { QuestsLog } from '@/Components/App/QuestsLog'

export const APP_SAVE = {
  id: 'save',
  scene: 'saveGame'
}

export const APP_INVENTORY = {
  id: 'inventory',
  app: 'inventory',
  component: <Inventory />
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

export const APP_RESEARCHESLIST = {
  id: 'researchesList',
  app: 'researchesList',
  component: <MyResearchesList />
}

export const APP_ACQUINTANCES = {
  id: 'acquintances',
  app: 'acquintances',
  component: <Acquaintances />
}

export const APP_LOCATION = {
  id: 'location',
  app: 'location',
  component: <Location />
}

export const APP_JOURNAL = {
  id: 'journal',
  app: 'journal',
  component: <QuestsLog />
}

export const AllApps = {
  inventory: APP_INVENTORY,
  location: APP_LOCATION,
  journal: APP_JOURNAL,
  acquintances: APP_ACQUINTANCES,
  researchesList: APP_RESEARCHESLIST,
  partnersList: APP_PARTNERSLIST,
  achievements: APP_ACHIEVEMENTS,
  save: APP_SAVE,
  logoff: APP_LOGOFF
}

export const DigiviceApps = {
  inventory: APP_INVENTORY,
  journal: APP_JOURNAL,
  acquintances: APP_ACQUINTANCES,
  partnersList: APP_PARTNERSLIST,
  save: APP_SAVE,
  logoff: APP_LOGOFF
}
