import { create } from 'zustand'

import type { GameType } from '@/Types/Game.type'

type GameStore = {
  game: GameType | null
  isTransitioning: boolean
  setGame: (game: GameType | null) => void
  setIsTransitioning: (isTransitioning: boolean) => void
}

export const useGameStore = create<GameStore>((set) => ({
  game: null,
  isTransitioning: false,
  setGame: (game) => {
    set({ game })
  },
  setIsTransitioning: (isTransitioning) => {
    set({ isTransitioning })
  }
}))
