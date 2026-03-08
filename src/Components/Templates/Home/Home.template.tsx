import { MenuWrapper } from '@/Components/App/MenuWrapper'
import { CoresCollected } from '@/Components/App/CoresCollected'

import './Home.style.scss'

export const HomeTemplate = () => {
  return (
    <MenuWrapper>
      <main className="home-template">
        <CoresCollected />
      </main>
    </MenuWrapper>
  )
}
