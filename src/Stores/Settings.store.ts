import { create } from 'zustand'

import type { SettingsType } from '@/Types/Settings.type'

import { loadData } from '@/Helpers/loadData.helper'

type SettingsStore = {
  settings: SettingsType | null
  setSettings: (settings: SettingsType | null) => void
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  settings: { ...loadData({ key: 'settings' }), isOpen: false },

  setSettings: (settings) => {
    set({ settings })
  }
}))
