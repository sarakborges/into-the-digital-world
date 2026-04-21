import { useEffect } from 'react'

import { Scenes } from '@/Scenes'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Controller } from '@/Components/App/Controller'
import { Gameboard } from '@/Components/App/Gameboard'
import { Settings } from '@/Components/App/Settings'

import './Game.style.scss'

export const Game = () => {
  const { scene, setScene } = useScene()
  const { profile } = useProfile()

  useEffect(() => {
    if (!profile) {
      setScene({
        currentScene: 'introduction',
        currentStage: '001'
      })
    }
  }, [])

  return (
    <div className="game-body">
      <div className="main-game">
        <Settings />

        <>
          {!!scene?.currentScene &&
            Scenes[scene?.currentScene][scene?.currentStage || '001']}
        </>

        {!scene && (
          <>
            <Gameboard />
            <Controller />
          </>
        )}
      </div>
    </div>
  )
}
