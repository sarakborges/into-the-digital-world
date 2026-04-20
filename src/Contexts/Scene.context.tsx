import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { SceneType } from '@/Types/Scene.type'
import type { SceneContextType } from '@/Types/Contexts/SceneContext.type'

export const SceneContext = createContext<SceneContextType | null>(null)

export const SceneProvider = ({ children }: { children: ReactNode }) => {
  const [scene, setScene] = useState<SceneType | null>(null)

  return (
    <SceneContext.Provider value={{ scene, setScene }}>
      {children}
    </SceneContext.Provider>
  )
}
