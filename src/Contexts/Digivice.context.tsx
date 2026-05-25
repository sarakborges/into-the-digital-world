import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { DigiviceType } from '@/Types/Digivice.type'
import type { DigiviceContextType } from '@/Types/Contexts/DigiviceContext.type'

const defaultDigivice: DigiviceType = {
  isOpen: false
}

export const DigiviceContext = createContext<DigiviceContextType>({
  digivice: { ...defaultDigivice, isOpen: false },
  setDigivice: () => {}
})

export const DigiviceProvider = ({ children }: { children: ReactNode }) => {
  const [digivice, setDigivice] = useState<DigiviceType>({
    isOpen: false
  })

  return (
    <div>
      <DigiviceContext.Provider value={{ digivice, setDigivice }}>
        {children}
      </DigiviceContext.Provider>
    </div>
  )
}
