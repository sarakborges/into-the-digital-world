import { useContext } from 'react'

import { SceneContext } from '@/Contexts/Scene.context'

export function useScene() {
  const context = useContext(SceneContext)

  if (!context) {
    throw new Error('useScene must be used within SceneProvider')
  }

  return context
}
