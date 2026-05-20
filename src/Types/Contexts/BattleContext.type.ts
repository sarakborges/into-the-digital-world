import type { BattleType } from '@/Types/Battle.type'

export type BattleContextType = {
  battle: BattleType | null
  setBattle: React.Dispatch<React.SetStateAction<BattleType | null>>
}
