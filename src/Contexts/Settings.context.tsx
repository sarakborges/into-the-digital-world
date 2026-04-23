import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { SettingsType } from '@/Types/Settings.type'
import type { SettingsContextType } from '@/Types/Contexts/SettingsContext.type'

const defaultSettings = {
  isOpen: false
}

export const SettingsContext = createContext<SettingsContextType>({
  settings: { ...defaultSettings },
  setSettings: () => {}
})

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<SettingsType>({ ...defaultSettings })

  return (
    <div className={`theme-${settings?.theme || 'default'}`}>
      <SettingsContext.Provider value={{ settings, setSettings }}>
        {children}
      </SettingsContext.Provider>
    </div>
  )
}
