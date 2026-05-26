import type { GameType } from '@/Types/Game.type'

import { create } from 'zustand'

type GameStore = {
  game: GameType | null
  setGame: (game: GameType | null) => void
}

export const useGameStore = create<GameStore>((set) => ({
  game: null,

  setGame: (game) => {
    set({ game })
  }
}))
