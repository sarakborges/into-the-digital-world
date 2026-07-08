import { getTranslation } from '@/Helpers/Language'
import { loadData, saveSession } from '@/Helpers/Systems/Data'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Button } from '@/Components/DesignSystem/Button'

export const LoadGame = ({ profileId }: { profileId: number }) => {
  const { setDigivice } = useDigiviceStore((state) => state)

  const loadProfile = () => {
    const loadedProfile = loadData({ key: `profile${profileId}` })

    if (!loadedProfile) {
      return
    }

    saveSession(loadedProfile)
    setDigivice({
      isOpen: false
    })
  }

  return <Button onClick={loadProfile}>{getTranslation('LOAD_GAME')}</Button>
}
