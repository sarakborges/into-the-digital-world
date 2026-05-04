import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { SceneType } from '@/Types/Scene.type'
import type { SceneContextType } from '@/Types/Contexts/SceneContext.type'

import { loadSession } from '@/Helpers/loadSession.helper'

export const SceneContext = createContext<SceneContextType | null>(null)

export const SceneProvider = ({ children }: { children: ReactNode }) => {
  const profile = loadSession({ key: 'profile' })

  const [scene, setScene] = useState<SceneType | null>(
    profile?.currentScene
      ? {
          currentScene: profile.currentScene,
          currentStage: '001'
        }
      : null
  )

  return (
    <SceneContext.Provider value={{ scene, setScene }}>
      {children}
    </SceneContext.Provider>
  )
}
