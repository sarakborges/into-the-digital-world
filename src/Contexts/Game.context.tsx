import { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import { loadData } from '@/Helpers/loadData.helper'

import type { GameType } from '@/Types/Game.type'
import type { GameContextType } from '@/Types/Contexts/GameContext.type'

import { useProfile } from '@/Hooks/Profile.hook'

export const GameContext = createContext<GameContextType | null>(null)

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const { setProfile } = useProfile()
  const [game, setGame] = useState<GameType | null>(null)

  useEffect(() => {
    const localProfile = loadData({ key: 'profile' })

    if (!localProfile) {
      setGame({
        currentMap: 'RootDomain',
        currentX: 1,
        currentY: 1,
        scene: ''
      })

      return
    }

    setProfile(localProfile)
  }, [])

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  )
}
