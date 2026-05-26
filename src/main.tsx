import { createRoot } from 'react-dom/client'

import { GameProvider } from '@/Contexts/Game.context'
import { SceneProvider } from '@/Contexts/Scene.context'
import { SettingsProvider } from '@/Contexts/Settings.context'
import { DigiviceProvider } from '@/Contexts/Digivice.context'
import { SavedProfilesProvider } from '@/Contexts/SavedProfiles.context'
import { AvatarCustomizationProvider } from '@/Contexts/AvatarCustomization.context'
import { BattleProvider } from '@/Contexts/Battle.context'

import { Game } from '@/Templates/Game'

import '@/Assets/main.css'

const RenderProviders = ({ children }) => {
  const providers = [
    GameProvider,
    SavedProfilesProvider,
    SceneProvider,
    SettingsProvider,
    DigiviceProvider,
    AvatarCustomizationProvider,
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
