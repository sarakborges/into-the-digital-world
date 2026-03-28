import React, { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { PartnerDigimonType } from '@/Types/Digimon.type'

type CollectionContextType = {
  digimonDetails: PartnerDigimonType | undefined
  setDigimonDetails: React.Dispatch<
    React.SetStateAction<PartnerDigimonType | undefined>
  >
}

export const CollectionContext = createContext<
  CollectionContextType | undefined
>(undefined)

export const CollectionProvider = ({ children }: { children: ReactNode }) => {
  const [digimonDetails, setDigimonDetails] = useState<
    PartnerDigimonType | undefined
  >(undefined)

  return (
    <CollectionContext.Provider value={{ digimonDetails, setDigimonDetails }}>
      {children}
    </CollectionContext.Provider>
  )
}
