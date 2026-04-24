import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { SettingsType } from '@/Types/Settings.type'
import type { SettingsContextType } from '@/Types/Contexts/SettingsContext.type'
import { loadData } from '@/Helpers/loadData.helper'

const defaultSettings: SettingsType = {
  isOpen: false,
  theme: 'default',
  language: 'en-us'
}

export const SettingsContext = createContext<SettingsContextType>({
  settings: { ...defaultSettings, isOpen: false },
  setSettings: () => {}
})

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const savedSettings = loadData({ key: 'settings' }) || defaultSettings

  const [settings, setSettings] = useState<SettingsType>({
    ...savedSettings,
    isOpen: false
  })

  return (
    <div className={`theme-${settings.theme}`}>
      <SettingsContext.Provider value={{ settings, setSettings }}>
        {children}
      </SettingsContext.Provider>
    </div>
  )
}
