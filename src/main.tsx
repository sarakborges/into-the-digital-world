import { createRoot } from 'react-dom/client'

import { SettingsProvider } from '@/Contexts/Settings.context'
import { SavedProfilesProvider } from '@/Contexts/SavedProfiles.context'
import { BattleProvider } from '@/Contexts/Battle.context'

import { Game } from '@/Templates/Game'

import '@/Assets/main.css'

const RenderProviders = ({ children }) => {
  const providers = [
    SavedProfilesProvider,
    SettingsProvider,
    BattleProvider
  ].reduce(
    (PrevProvider, CurrentProvider) => (
      <CurrentProvider>{PrevProvider}</CurrentProvider>
    ),
    children
  )

  return providers
}

createRoot(document.getElementById('root')!).render(
  <RenderProviders>
    <Game />
  </RenderProviders>
)
