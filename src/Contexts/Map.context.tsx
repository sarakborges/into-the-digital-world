import React, { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { MapType } from '@/Types/Map.type'

type MapContextType = {
  currentMap: MapType | undefined
  setCurrentMap: React.Dispatch<React.SetStateAction<MapType | undefined>>
}

export const MapContext = createContext<MapContextType | undefined>(undefined)

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const [currentMap, setCurrentMap] = useState<MapType | undefined>(undefined)

  return (
    <MapContext.Provider value={{ currentMap, setCurrentMap }}>
      {children}
    </MapContext.Provider>
  )
}
