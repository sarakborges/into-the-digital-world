import React, { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router'

import type { BattleType } from '@/Types/Battle.type'

import { ROUTES } from '@/Routes/Routes'

type BattleContextType = {
  battle: BattleType
  setBattle: React.Dispatch<React.SetStateAction<BattleType>>
}

export const BattleContext = createContext<BattleContextType | undefined>(
  undefined
)

export const BattleProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [battle, setBattle] = useState<BattleType>({
    digimons: [],
    turnOrder: [],
    combatLog: []
  })

  useEffect(() => {
    const localBattle = localStorage.getItem('battle')

    if (ROUTES.BATTLE.path === location.pathname) {
      if (!localBattle) {
        navigate(ROUTES.MAPS.path)
        return
      }

      const localBattleParsed = JSON.parse(localBattle)

      const allDigimons = [...localBattleParsed.digimons]

      const currentDigimon = allDigimons.find(
        (item) => item.id === localBattleParsed.turnOrder[0]
      )

      setBattle({ ...localBattleParsed, currentDigimon })
    }

    if (localBattle) {
      navigate(ROUTES.BATTLE.path)
      return
    }
  }, [])

  return (
    <BattleContext.Provider value={{ battle, setBattle }}>
      {children}
    </BattleContext.Provider>
  )
}
