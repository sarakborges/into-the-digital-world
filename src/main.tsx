import { createRoot } from 'react-dom/client'

import { GameboardTemplate } from './Components/Templates/Gameboard'

import '@/Assets/main.css'

createRoot(document.getElementById('root')!).render(<GameboardTemplate />)
