import { create } from 'zustand'

import type { SettingsType } from '@/Types/Settings.type'

import { DEFAULT_SETTINGS } from '@/Consts/Settings.const'

type SettingsStore = {
  settings: SettingsType
  setSettings: (settings: SettingsType) => void
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  settings: { ...DEFAULT_SETTINGS },

  setSettings: (settings) => {
    set({ settings })
  }
}))
