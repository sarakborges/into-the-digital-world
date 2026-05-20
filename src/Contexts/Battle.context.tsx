import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { BattleType } from '@/Types/Battle.type'
import type { BattleContextType } from '@/Types/Contexts/BattleContext.type'

export const BattleContext = createContext<BattleContextType | null>(null)

export const BattleProvider = ({ children }: { children: ReactNode }) => {
  const [battle, setBattle] = useState<BattleType | null>(null)

  return (
    <BattleContext.Provider value={{ battle, setBattle }}>
      {children}
    </BattleContext.Provider>
  )
}
