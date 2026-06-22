import {Acquaintances} from '@/Components/Digivice/Apps/Acquaintances/Container'
import {PartnersList} from '@/Components/Digivice/Apps/Partners/PartnersList'
import {Inventory} from '@/Components/Digivice/Apps/Inventory'
import {MyResearchesList} from '@/Components/Digivice/Apps/MyResearchesList'
import {Location} from '@/Components/Digivice/Apps/Location'
import {QuestsLog} from '@/Components/Digivice/Apps/QuestsLog/Container'
import {Map} from '@/Components/Global/Map'

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

export const APP_ACQUAINTANCES = {
  id: 'acquaintances',
  app: 'acquaintances',
  component: <Acquaintances />
}

export const APP_LOCATION = {
  id: 'location',
  app: 'location',
  component: <Location />
}

export const APP_MAP = {
  id: 'map',
  app: 'map',
  component: <Map />
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
  map: APP_MAP,
  acquaintances: APP_ACQUAINTANCES,
  partnersList: APP_PARTNERSLIST,
  save: APP_SAVE,
  logoff: APP_LOGOFF
}
