import type { GameType } from '@/Types/Game.type'

export type GameContextType = {
  game: GameType | null
  setGame: React.Dispatch<React.SetStateAction<GameType | null>>
}
