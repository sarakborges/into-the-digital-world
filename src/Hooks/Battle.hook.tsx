import { useContext } from 'react'

import { BattleContext } from '@/Contexts/Battle.context'

export function useBattle() {
  const context = useContext(BattleContext)

  if (!context) {
    throw new Error('useBattle must be used within BattleProvider')
  }

  return context
}
