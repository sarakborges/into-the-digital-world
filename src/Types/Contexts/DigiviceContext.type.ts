import type { DigiviceType } from '@/Types/Digivice.type'

export type DigiviceContextType = {
  digivice: DigiviceType
  setDigivice: React.Dispatch<React.SetStateAction<DigiviceType>>
}
