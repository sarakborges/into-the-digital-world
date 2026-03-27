import React, { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { DigimonType } from '@/Types/Digimon.type'
import type { CompositionComponentsType } from '@/Types/Composition.type'

type CompositionContextType = {
  baseDigimon: DigimonType | undefined
  setBaseDigimon: React.Dispatch<React.SetStateAction<DigimonType | undefined>>

  components: CompositionComponentsType
  setComponents: React.Dispatch<React.SetStateAction<CompositionComponentsType>>
}

export const CompositionContext = createContext<
  CompositionContextType | undefined
>(undefined)

export const CompositionProvider = ({ children }: { children: ReactNode }) => {
  const [baseDigimon, setBaseDigimon] = useState<DigimonType | undefined>(
    undefined
  )
  const [components, setComponents] = useState<CompositionComponentsType>({})

  return (
    <CompositionContext.Provider
      value={{
        baseDigimon,
        setBaseDigimon,
        components,
        setComponents
      }}
    >
      {children}
    </CompositionContext.Provider>
  )
}
