import React, { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { NpcType } from '@/Types/Npc.type'

type NpcContextType = {
  currentNpc: NpcType | undefined
  setCurrentNpc: React.Dispatch<React.SetStateAction<NpcType | undefined>>
}

export const NpcContext = createContext<NpcContextType | undefined>(undefined)

export const NpcProvider = ({ children }: { children: ReactNode }) => {
  const [currentNpc, setCurrentNpc] = useState<NpcType | undefined>(undefined)

  return (
    <NpcContext.Provider value={{ currentNpc, setCurrentNpc }}>
      {children}
    </NpcContext.Provider>
  )
}
