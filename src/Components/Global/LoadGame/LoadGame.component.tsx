import { readStoredProfile } from '@/Systems/Save/Save.storage'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { saveBattle } from '@/Helpers/Systems/Battle/saveBattle.helper'
import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'
import { saveDungeon } from '@/Helpers/Systems/Dungeon/saveDungeon.helper'
import { openCurrentTileScene } from '@/Helpers/Systems/Zones/openCurrentTileScene.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'

export const LoadGame = ({ profileId }: { profileId: number }) => {
  const { setDigivice } = useDigiviceStore((state) => state)

  const loadProfile = (): void => {
    const profile = readStoredProfile(profileId)

    if (!profile) {
      return
    }

    saveBattle(null)
    saveDungeon(null)
    saveSession(profile)
    setDigivice({
      isOpen: false
    })
    openCurrentTileScene()
  }

  return <Button onClick={loadProfile}>{getTexts('LOAD_GAME')}</Button>
}
