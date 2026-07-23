import { saveService } from '@/Systems/Save/Save.service'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { saveBattle } from '@/Helpers/Systems/Battle/saveBattle.helper'
import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'
import { saveDungeon } from '@/Helpers/Systems/Dungeon/saveDungeon.helper'
import { openCurrentTileScene } from '@/Helpers/Systems/Zones/openCurrentTileScene.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'

export const LoadGame = ({ profileId }: { profileId: number }) => {
  const { setDigivice } = useDigiviceStore((state) => state)

  const loadProfile = async (): Promise<void> => {
    try {
      const { save } = await saveService.load(String(profileId))

      saveBattle(null)
      saveDungeon(null)
      saveSession(save.profile)
      setDigivice({
        isOpen: false
      })
      openCurrentTileScene()
    } catch (error) {
      console.warn(`Error loading save slot ${profileId}: ${error}`)
    }
  }

  return (
    <Button onClick={() => void loadProfile()}>{getTexts('LOAD_GAME')}</Button>
  )
}
