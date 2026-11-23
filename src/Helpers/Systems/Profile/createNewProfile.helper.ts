import { ProfileModel } from '@/Models/Profile.model'

import { loadGame } from '@/Helpers/Systems/Game'
import { getNewId } from '@/Helpers/Systems/Profile'
import { changeScene } from '@/Helpers/Systems/Scenes'

import { useProfileStore } from '@/Stores/Profile.store'

export const createNewProfile = () => {
  const { setProfile } = useProfileStore.getState()

  setProfile({ ...ProfileModel, id: getNewId() })
  loadGame()

  changeScene('rootDomainDorms')
}
