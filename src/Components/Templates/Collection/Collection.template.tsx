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

  const digimonsNotInParty = profile.partners?.filter(
    (partyItem) => !profile.party?.includes(partyItem.id)
  )

  return (
    <MenuWrapper>
      <main className="collection-template">
        <header className="collection-header">
          <Typography as="h1">{getTexts('COLLECTION_TITLE')}</Typography>
          <Typography as="h2">{getTexts('COLLECTION_SUBTITLE')}</Typography>
        </header>

        <section className="collection-list">
          <header>
            <Typography as="h2">
              {getTexts('COLLECTION_PARTY_TITLE')}
            </Typography>
          </header>

          {!!digimonsInParty?.length && (
            <main className="partners-list">
              {digimonsInParty?.map((partyItem) => (
                <PartnerDigimonCard
                  key={`partner-list-item-${partyItem?.id}`}
                  digimonItem={partyItem!}
                />
              ))}
            </main>
          )}
        </section>

        {!!digimonsNotInParty?.length && (
          <section className="collection-list">
            <header>
              <Typography as="h2">
                {getTexts('COLLECTION_ALL_TITLE')}
              </Typography>
            </header>

            <main className="partners-list">
              {digimonsNotInParty?.map((partyItem) => (
                <PartnerDigimonCard
                  key={`partner-list-item-${partyItem?.id}`}
                  digimonItem={partyItem!}
                />
              ))}
            </main>
          </section>
        )}
      </main>
    </MenuWrapper>
  )
}
