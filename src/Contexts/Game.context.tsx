import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { GameType } from '@/Types/Game.type'
import type { GameContextType } from '@/Types/Contexts/GameContext.type'

import * as Zones from '@/GameData/Zones'

const defaultZone = Zones['RootDomain']

const defaultGame = {
  currentZone: defaultZone.id,
  currentX: 4,
  currentY: 4
}

export const GameContext = createContext<GameContextType>({
  game: defaultGame,
  setGame: () => {}
})

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [game, setGame] = useState<GameType>(defaultGame)

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  )
}
