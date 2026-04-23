import { useContext } from 'react'

import { SettingsContext } from '@/Contexts/Settings.context'

export function useSettings() {
  const context = useContext(SettingsContext)

  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider')
  }

  return context
}
