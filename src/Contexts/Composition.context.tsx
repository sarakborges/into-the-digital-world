import React, { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { DigimonType } from '@/Types/Digimon.type'
import type { CompositionComponentsType } from '@/Types/Composition.type'

type CompositionContextType = {
  baseDigimon: DigimonType | undefined
  setBaseDigimon: React.Dispatch<React.SetStateAction<DigimonType | undefined>>

  progress: number
  setProgress: React.Dispatch<React.SetStateAction<number>>

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
  const [progress, setProgress] = useState<number>(0)
  const [components, setComponents] = useState<CompositionComponentsType>({})

  return (
    <CompositionContext.Provider
      value={{
        baseDigimon,
        setBaseDigimon,
        progress,
        setProgress,
        components,
        setComponents
      }}
    >
      {children}
    </CompositionContext.Provider>
  )
}
