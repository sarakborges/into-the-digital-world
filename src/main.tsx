import { createRoot } from 'react-dom/client'

import { GameProvider } from '@/Contexts/Game.context'
import { ProfileProvider } from '@/Contexts/Profile.context'

import { GameboardTemplate } from '@/Components/Templates/Gameboard'

import '@/Assets/main.css'

createRoot(document.getElementById('root')!).render(
  <ProfileProvider>
    <GameProvider>
      <GameboardTemplate />
    </GameProvider>
  </ProfileProvider>
)
