import { getTexts } from '@/Helpers/getTexts.helper'

import { loadData } from '@/Helpers/loadData.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { useProfile } from '@/Hooks/Profile.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'

import { Button } from '@/Components/System/Button'

export const LoadGame = ({ profileId }: { profileId: number }) => {
  const { setProfile } = useProfile()
  const { setDigivice } = useDigivice()

  const loadProfile = () => {
    const profile = loadData({ key: `profile${profileId}` })

    if (!profile) {
      return
    }

    saveSession({
      key: 'profile',
      value: profile
    })

    setDigivice({
      isOpen: false
    })

    setProfile(profile)
  }

  return <Button onClick={loadProfile}>{getTexts('LOAD_GAME')}</Button>
}
