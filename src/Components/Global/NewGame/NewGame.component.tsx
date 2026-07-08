import { getTranslation } from '@/Helpers/Language'
import { createNewProfile } from '@/Helpers/Systems/Profile'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button'

import './NewGame.style.scss'

export const NewGame = () => {
  const { setProfile } = useProfileStore((state) => state)
  const { setDigivice } = useDigiviceStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  const handleCreateNewProfile = () => {
    const newProfile = createNewProfile()

    setProfile(newProfile)
    setDigivice({ isOpen: false })

    setScene({
      currentScene: 'introduction',
      currentStage: '001'
    })
  }

  return (
    <div className="new-game">
      <Button style="secondary" onClick={handleCreateNewProfile}>
        {getTranslation('START_NEW_GAME')}
      </Button>
    </div>
  )
}
