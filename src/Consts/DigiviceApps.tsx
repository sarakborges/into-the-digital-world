import { AppFashion } from '@/Components/DigiviceApps/AppFashion'
import { AppSave } from '@/Components/DigiviceApps/AppSave'

export const APP_SAVE = {
  id: 'save',
  component: <AppSave />
}

export const APP_FASHION = {
  id: 'fashion',
  component: <AppFashion />
}

export const AllApps = {
  fashion: APP_FASHION,
  save: APP_SAVE
}
