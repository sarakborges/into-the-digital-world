import type { GameType } from '@/Types/Game.type'

export type GameContextType = {
  game: GameType
  setGame: React.Dispatch<React.SetStateAction<GameType>>
}
