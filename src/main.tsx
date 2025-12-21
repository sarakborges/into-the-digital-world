import { RouterProvider } from 'react-router'

import { createRoot } from 'react-dom/client'

import { ROUTER } from '@/Routes/Router'

import '@/Assets/main.css'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={ROUTER} />
)
