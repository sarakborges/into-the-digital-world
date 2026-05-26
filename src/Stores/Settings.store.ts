import type { SettingsType } from '@/Types/Settings.type'

import { create } from 'zustand'

type SettingsStore = {
  settings: SettingsType | null
  setSettings: (settings: SettingsType | null) => void
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  settings: null,

  setSettings: (settings) => {
    set({ settings })
  }
}))
