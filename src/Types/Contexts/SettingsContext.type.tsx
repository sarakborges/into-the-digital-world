import type { SettingsType } from '@/Types/Settings.type'

export type SettingsContextType = {
  settings: SettingsType
  setSettings: React.Dispatch<React.SetStateAction<SettingsType>>
}
