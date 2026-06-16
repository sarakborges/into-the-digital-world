import { getTexts } from '@/Helpers/Language'

import { loadData } from '@/Helpers/Systems/Profile'
import { saveSession } from '@/Helpers/Systems/Profile'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Button } from '@/Components/System/Button'
import { useProfileStore } from '@/Stores/Profile.store'

export const LoadGame = ({ profileId }: { profileId: number }) => {
  const { setDigivice } = useDigiviceStore((state) => state)
  const { setProfile } = useProfileStore((state) => state)

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
