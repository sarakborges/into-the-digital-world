import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { GameType } from '@/Types/Game.type'
import type { GameContextType } from '@/Types/Contexts/GameContext.type'

export const GameContext = createContext<GameContextType>({
  game: null,
  setGame: () => {}
})

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [game, setGame] = useState<GameType | null>(null)

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  )
}
