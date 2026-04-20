import { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import { loadData } from '@/Helpers/loadData.helper'

import type { GameType } from '@/Types/Game.type'
import type { GameContextType } from '@/Types/Contexts/GameContext.type'

import * as Zones from '@/GameData/Zones'

import { useProfile } from '@/Hooks/Profile.hook'

const defaultZone = Zones['RootDomain']

const defaultGame = {
  currentZone: defaultZone.id,
  currentX: defaultZone.spawn.x,
  currentY: defaultZone.spawn.y
}

export const GameContext = createContext<GameContextType>({
  game: defaultGame,
  setGame: () => {}
})

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const { setProfile } = useProfile()
  const [game, setGame] = useState<GameType>(defaultGame)

  useEffect(() => {
    const localProfile = loadData({ key: 'profile' })
    setProfile(localProfile)
  }, [])

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  )
}
