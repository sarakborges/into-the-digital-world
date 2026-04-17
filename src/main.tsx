import { createRoot } from 'react-dom/client'

import { GameProvider } from '@/Contexts/Game.context'
import { ProfileProvider } from '@/Contexts/Profile.context'

import { Game } from '@/Components/Templates/Game'

import '@/Assets/main.css'

createRoot(document.getElementById('root')!).render(
  <ProfileProvider>
    <GameProvider>
      <Game />
    </GameProvider>
  </ProfileProvider>
)
