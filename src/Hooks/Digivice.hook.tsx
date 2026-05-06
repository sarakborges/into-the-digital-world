import { useContext } from 'react'

import { DigiviceContext } from '@/Contexts/Digivice.context'

export function useDigivice() {
  const context = useContext(DigiviceContext)

  if (!context) {
    throw new Error('useDigivice must be used within DigiviceProvider')
  }

  return context
}
