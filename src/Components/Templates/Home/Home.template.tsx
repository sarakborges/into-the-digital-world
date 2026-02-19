import { getTexts } from '@/Texts'

import { Typography } from '@/Components/System/Typography'

import { MenuWrapper } from '@/Components/App/MenuWrapper'
import { CoresCollected } from '@/Components/App/CoresCollected'
import { CurrentParty } from '@/Components/App/CurrentParty'

import './Home.style.scss'

export const HomeTemplate = () => {
  return (
    <MenuWrapper>
      <main className="home-template">
        <section className="player-party">
          <Typography as="h2">{getTexts('PARTY_TITLE')}</Typography>
          <CurrentParty />
        </section>

        <CoresCollected />
      </main>
    </MenuWrapper>
  )
}
