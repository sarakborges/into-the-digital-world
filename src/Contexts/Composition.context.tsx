import React, { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { DigimonType } from '@/Types/Digimon.type'

type CompositionContextType = {
  baseDigimon: DigimonType | undefined
  setBaseDigimon: React.Dispatch<React.SetStateAction<DigimonType | undefined>>
}

export const CompositionContext = createContext<
  CompositionContextType | undefined
>(undefined)

export const CompositionProvider = ({ children }: { children: ReactNode }) => {
  const [baseDigimon, setBaseDigimon] = useState<DigimonType | undefined>(
    undefined
  )

  return (
    <CompositionContext.Provider value={{ baseDigimon, setBaseDigimon }}>
      {children}
    </CompositionContext.Provider>
  )
}
