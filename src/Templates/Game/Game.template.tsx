import { useEffect } from 'react'

import { Scene } from '@/GameData/Scenes'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useSettings } from '@/Hooks/Settings.hook'
import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import { InteractableTiles } from '@/Components/App/InteractableTiles'
import { Gamepad } from '@/Components/App/Gamepad'
import { Gameboard } from '@/Components/App/Gameboard'
import { Settings } from '@/Components/App/Settings'
import { StartScreen } from '@/Components/App/StartScreen'

import './Game.style.scss'

export const Game = () => {
  const { scene } = useScene()
  const { profile } = useProfile()
  const { settings } = useSettings()
  const { loadProfiles } = useSavedProfiles()

  useEffect(() => {
    loadProfiles()
  }, [settings])

  return (
    <div className="game-body">
      <div className="main-game">
        <Settings />

        {!scene && (
          <>
            {!profile && <StartScreen />}

            {!!profile && (
              <div className="screen-footer">
                <InteractableTiles />
                <Gamepad />
              </div>
            )}
          </>
        )}

        {!!profile && <Gameboard />}
        {!!scene && <Scene />}
      </div>
    </div>
  )
}
