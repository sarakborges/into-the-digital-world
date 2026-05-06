import { createRoot } from 'react-dom/client'

import { GameProvider } from '@/Contexts/Game.context'
import { ProfileProvider } from '@/Contexts/Profile.context'
import { SceneProvider } from '@/Contexts/Scene.context'
import { SettingsProvider } from '@/Contexts/Settings.context'
import { DigiviceProvider } from '@/Contexts/Digivice.context'
import { SavedProfilesProvider } from '@/Contexts/SavedProfiles.context'
import { AvatarCustomizationProvider } from '@/Contexts/AvatarCustomization.context'

import { Game } from '@/Templates/Game'

import '@/Assets/main.css'

const RenderProviders = ({ children }) => {
  const providers = [
    GameProvider,
    ProfileProvider,
    SavedProfilesProvider,
    SceneProvider,
    SettingsProvider,
    DigiviceProvider,
    AvatarCustomizationProvider
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
