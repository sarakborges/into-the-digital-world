import { create } from 'zustand'

import type { SettingsType } from '@/Types/Settings.type'

type SettingsStore = {
  settings: SettingsType | null
  setSettings: (settings: SettingsType | null) => void
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  settings: {
    isOpen: false,
    language: 'en',
    theme: 'default'
  },

  setSettings: (settings) => {
    set({ settings })
  }
}))
