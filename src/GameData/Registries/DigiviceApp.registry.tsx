import type { ReactNode } from 'react'

import type { SceneType } from '@/Types/Scene.type'

import { Logoff001 } from '@/GameData/Scenes/Apps/Logoff/001.scene'
import { SaveGame001 } from '@/GameData/Scenes/Apps/SaveGame/001.scene'

import { AppAcquaintances } from '@/Components/Digivice/Apps/AppAcquaintances/List/AppAcquaintances.component'
import { AppInventory } from '@/Components/Digivice/Apps/AppInventory/AppInventory.component'
import { AppLocation } from '@/Components/Digivice/Apps/AppLocation/AppLocation.component'
import { AppPartnersList } from '@/Components/Digivice/Apps/AppPartners/List/AppPartnersList.component'
import { AppQuestsLog } from '@/Components/Digivice/Apps/AppQuestsLog/AppQuestsLog.component'
import { AppResearchesList } from '@/Components/Digivice/Apps/AppResearchesList/AppResearchesList.component'

export type DigiviceAppDefinition = {
  id: string
  app?: string
  component?: ReactNode
  scene?: SceneType
}

const appSave = {
  id: 'save',
  scene: {
    component: SaveGame001
  }
} satisfies DigiviceAppDefinition

const appInventory = {
  id: 'inventory',
  app: 'inventory',
  component: <AppInventory />
} satisfies DigiviceAppDefinition

const appLogoff = {
  id: 'logoff',
  scene: {
    component: Logoff001
  }
} satisfies DigiviceAppDefinition

const appAchievements = {
  id: 'achievements'
} satisfies DigiviceAppDefinition

const appPartnersList = {
  id: 'partnersList',
  app: 'partnersList',
  component: <AppPartnersList />
} satisfies DigiviceAppDefinition

const appResearchesList = {
  id: 'researchesList',
  app: 'researchesList',
  component: <AppResearchesList />
} satisfies DigiviceAppDefinition

const appAcquaintances = {
  id: 'acquaintances',
  app: 'acquaintances',
  component: <AppAcquaintances />
} satisfies DigiviceAppDefinition

const appLocation = {
  id: 'location',
  app: 'location',
  component: <AppLocation />
} satisfies DigiviceAppDefinition

const appJournal = {
  id: 'journal',
  app: 'journal',
  component: <AppQuestsLog />
} satisfies DigiviceAppDefinition

const DigiviceAppRegistry = [
  appInventory,
  appLocation,
  appJournal,
  appAcquaintances,
  appResearchesList,
  appPartnersList,
  appAchievements,
  appSave,
  appLogoff
] satisfies DigiviceAppDefinition[]

const MainDigiviceApps = [
  appInventory,
  appJournal,
  appAcquaintances,
  appPartnersList,
  appSave,
  appLogoff
] satisfies DigiviceAppDefinition[]

export const findDigiviceApp = (
  appId: string
): DigiviceAppDefinition | undefined => {
  return DigiviceAppRegistry.find((app) => app.id === appId)
}

export const getMainDigiviceApps = (): DigiviceAppDefinition[] => {
  return [...MainDigiviceApps]
}
