import { AppFashion } from '@/Components/DigiviceApps/AppFashion'
import { AppLogoff } from '@/Components/DigiviceApps/AppLogoff'
import { AppSave } from '@/Components/DigiviceApps/AppSave'

export const APP_SAVE = {
  id: 'save',
  component: <AppSave />
}

export const APP_FASHION = {
  id: 'fashion',
  component: <AppFashion />
}

export const APP_LOGOFF = {
  id: 'logoff',
  component: <AppLogoff />
}

export const AllApps = {
  fashion: APP_FASHION,
  save: APP_SAVE,
  logoff: APP_LOGOFF
}
