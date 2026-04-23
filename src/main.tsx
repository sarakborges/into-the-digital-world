import { createRoot } from 'react-dom/client'

import { GameProvider } from '@/Contexts/Game.context'
import { ProfileProvider } from '@/Contexts/Profile.context'
import { SceneProvider } from '@/Contexts/Scene.context'
import { SettingsProvider } from '@/Contexts/Settings.context'
import { SavedProfilesProvider } from '@/Contexts/SavedProfiles.context'

import { Game } from '@/Templates/Game'

import '@/Assets/main.css'

createRoot(document.getElementById('root')!).render(
  <ProfileProvider>
    <GameProvider>
      <SceneProvider>
        <SettingsProvider>
          <SavedProfilesProvider>
            <Game />
          </SavedProfilesProvider>
        </SettingsProvider>
      </SceneProvider>
    </GameProvider>
  </ProfileProvider>
)
