import { createRoot } from 'react-dom/client'

import '@/GameData/Registries/ZoneMap.registry'

import { Game } from '@/Components/Main/Game'

import '@/Assets/main.css'

createRoot(document.getElementById('root')!).render(<Game />)
