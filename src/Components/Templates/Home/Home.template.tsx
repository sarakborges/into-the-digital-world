import { useContext } from 'react'

import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'

import { MenuWrapper } from '@/Components/App/MenuWrapper'
import { PartyDigimonCard } from '@/Components/App/PartyDigimonCard'

import './Home.style.scss'

export const HomeTemplate = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile } = profileContext

  const party = profile.party?.map((partyItem) =>
    profile.partners?.find((partnerItem) => partnerItem.id === partyItem)
  )

  return (
    <MenuWrapper>
      <main className="home-template">
        <section className="tamer-party">
          <Typography as="h2">Your current party:</Typography>

          <main className="tamer-party-digimons">
            {party?.map((partyItem) => (
              <PartyDigimonCard
                key={`partner-list-item-${partyItem?.id}`}
                digimonItem={partyItem!}
              />
            ))}
          </main>
        </section>
      </main>
    </MenuWrapper>
  )
}
