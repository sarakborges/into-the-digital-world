import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { GameType } from '@/Types/Game.type'
import type { GameContextType } from '@/Types/Contexts/GameContext.type'

export const GameContext = createContext<GameContextType>({
  game: {
    isWarping: false
  },
  setGame: () => {}
})

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [game, setGame] = useState<GameType | null>({
    isWarping: false
  })

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  )
}
