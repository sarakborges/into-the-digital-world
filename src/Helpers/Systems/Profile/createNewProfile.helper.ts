import { ProfileModel } from '@/Models/Profile.model'

import { IntoTheDigitalWorld001 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/001.dialog'

import { changeDialog } from '@/Helpers/Systems/Dialogs'
import { loadGame } from '@/Helpers/Systems/Game'
import { getNewId } from '@/Helpers/Systems/Profile'

import { useProfileStore } from '@/Stores/Profile.store'

export const createNewProfile = () => {
  const { setProfile } = useProfileStore.getState()

  setProfile({ ...ProfileModel, id: getNewId() })
  loadGame()

  changeDialog(IntoTheDigitalWorld001)
}
