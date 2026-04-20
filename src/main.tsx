import { createRoot } from 'react-dom/client'

import { GameProvider } from '@/Contexts/Game.context'
import { ProfileProvider } from '@/Contexts/Profile.context'
import { SceneProvider } from '@/Contexts/Scene.context'

import { Game } from '@/Templates/Game'

import '@/Assets/main.css'

createRoot(document.getElementById('root')!).render(
  <ProfileProvider>
    <GameProvider>
      <SceneProvider>
        <Game />
      </SceneProvider>
    </GameProvider>
  </ProfileProvider>
)
