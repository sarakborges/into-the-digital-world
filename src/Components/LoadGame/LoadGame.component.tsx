import { getTexts } from '@/Helpers/Language'

import { loadData, saveSession } from '@/Helpers/Systems/Data'

import { Button } from '@/DesignSystem/Button'

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
