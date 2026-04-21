import { useProfile } from '@/Hooks/Profile.hook'
import { useGame } from '@/Hooks/Game.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { deleteData } from '@/Helpers/deleteData.helper'

import * as Zones from '@/GameData/Zones'

import { Button } from '@/Components/System/Button'

export const ResetGame = () => {
  const { setScene } = useScene()
  const { setGame } = useGame()
  const { setProfile } = useProfile()

  const defaultZone = Zones['RootDomain']

  const defaultGame = {
    currentZone: defaultZone.id,
    currentX: defaultZone.spawn.x,
    currentY: defaultZone.spawn.y
  }

  const resetGame = () => {
    if (!confirm('This is irreversible. Are you sure you want to proceed?')) {
      return
    }

    try {
      deleteData({ key: 'profile' })

      setGame(defaultGame)
      setProfile(null)

      setScene({
        currentScene: 'introduction',
        currentStage: '001'
      })
    } catch (e) {
      console.log(e)
    }
  }

  return <Button onClick={resetGame}>Reset game</Button>
}
