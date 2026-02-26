import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'

import { MenuWrapper } from '@/Components/App/MenuWrapper'
import { PartnerDigimonCard } from '@/Components/App/PartnerDigimonCard'

import './Collection.style.scss'

export const CollectionTemplate = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile } = profileContext

  const digimonsInParty = profile.party?.map((partyItem) => {
    return profile.partners?.find((digimonItem) => digimonItem.id === partyItem)
  })

  const digimonsNoInParty = profile.partners?.filter(
    (partyItem) => !profile.party?.includes(partyItem.id)
  )

  return (
    <MenuWrapper>
      <main className="collection-template">
        <header>
          <Typography as="h1">{getTexts('COLLECTION_TITLE')}</Typography>
        </header>

        <main className="partners-list">
          {digimonsInParty?.map((partyItem) => (
            <PartnerDigimonCard
              key={`partner-list-item-${partyItem?.id}`}
              digimonItem={partyItem!}
            />
          ))}
        </main>

        <main className="partners-list">
          {digimonsNoInParty?.map((partyItem) => (
            <PartnerDigimonCard
              key={`partner-list-item-${partyItem?.id}`}
              digimonItem={partyItem!}
            />
          ))}
        </main>
      </main>
    </MenuWrapper>
  )
}
