import { getTexts } from '@/Helpers/Language'

import { loadData } from '@/Helpers/Systems/Profile'
import { saveSession } from '@/Helpers/Systems/Profile'

import { Button } from '@/Components/System/Button'

export const LoadGame = ({ profileId }: { profileId: number }) => {
  const loadProfile = () => {
    const loadedProfile = loadData({ key: `profile${profileId}` })

    if (!loadedProfile) {
      return
    }

    saveSession(loadedProfile)
  }

  return <Button onClick={loadProfile}>{getTexts('LOAD_GAME')}</Button>
}
