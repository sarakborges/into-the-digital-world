import { getTexts } from '@/Helpers/getTexts.helper'

import { loadData } from '@/Helpers/loadData.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Button } from '@/Components/System/Button'
import { useProfileStore } from '@/Stores/Profile.store'

export const LoadGame = ({ profileId }: { profileId: number }) => {
  const setDigivice = useDigiviceStore((state) => state.setDigivice)
  const setProfile = useProfileStore((state) => state.setProfile)

  const loadProfile = () => {
    const loadedProfile = loadData({ key: `profile${profileId}` })

    if (!loadedProfile) {
      return
    }

    setProfile(loadedProfile)

    saveSession({
      key: 'profile',
      value: loadedProfile
    })

    setDigivice({
      isOpen: false
    })
  }

  return <Button onClick={loadProfile}>{getTexts('LOAD_GAME')}</Button>
}
