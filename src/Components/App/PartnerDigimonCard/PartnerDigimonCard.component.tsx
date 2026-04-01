import { useContext } from 'react'

import { ALL_DIGIMONS } from '@/GameData/Digimons'

import type { PartnerDigimonType } from '@/Types/Digimon.type'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'
import { CollectionContext } from '@/Contexts/Collection.context'

import { MAX_DIGIMONS_IN_PARTY } from '@/Consts/Battle.consts'

import { Typography } from '@/Components/System/Typography'
import { Portrait } from '@/Components/System/Portrait'
import { Button } from '@/Components/System/Button'

import './PartnerDigimonCard.style.scss'

export const PartnerDigimonCard = ({
  digimonItem
}: {
  digimonItem: PartnerDigimonType
}) => {
  const profileContext = useContext(ProfileContext)
  const collectionContext = useContext(CollectionContext)

  if (!profileContext || !collectionContext) {
    return
  }

  const { profile, setProfile } = profileContext
  const { setDigimonDetails } = collectionContext

  const baseDigimon = ALL_DIGIMONS[digimonItem?.baseDigimon as string]
  const isDigimonInParty = profile?.party?.includes(digimonItem.id)

  const addToParty = () => {
    const updatedProfile = {
      ...profile,
      party: [...(profile.party ?? []), digimonItem.id]
    }

    setProfile(updatedProfile)
    localStorage.setItem('profile', JSON.stringify(updatedProfile))
  }

  const removeFromParty = () => {
    const updatedParty = profile?.party?.filter(
      (partyItem) => partyItem !== digimonItem.id
    )

    const updatedProfile = { ...profile, party: updatedParty }

    setProfile(updatedProfile)
    localStorage.setItem('profile', JSON.stringify(updatedProfile))
  }

  const decompose = () => {
    const updatedParty = profile?.party?.filter(
      (partyItem) => partyItem !== digimonItem.id
    )

    const updatedPartners = profile?.partners?.filter(
      (partyItem) => partyItem.id !== digimonItem.id
    )

    const digimonCore = profile.cores[baseDigimon.id] || 0

    const updatedCores = {
      ...profile.cores,
      [baseDigimon.id]: digimonCore + 1
    }

    const updatedProfile = {
      ...profile,
      party: updatedParty,
      partners: updatedPartners,
      cores: updatedCores
    }

    setProfile(updatedProfile)
    localStorage.setItem('profile', JSON.stringify(updatedProfile))
  }

  return (
    <div
      className="partner-digimon-card card"
      key={`partner-list-item-${digimonItem.id}`}
    >
      <main className="digimon-info">
        <aside>
          <Portrait
            src={`/digimon_portraits/${baseDigimon!.id}.jpg`}
            alt={`Party digimon: ${baseDigimon!.name}`}
            size="sm"
          />

          <section className="info-text">
            <Typography as="h2">
              {digimonItem.name || baseDigimon!.name}
            </Typography>
          </section>
        </aside>
      </main>

      <section className="digimon-actions">
        <Button
          cancel
          onClick={decompose}
          disabled={profile.partners.length <= 1}
        >
          {getTexts('DIGIMON_CARD_DECOMPOSE')}
        </Button>

        {!isDigimonInParty && (
          <Button
            onClick={addToParty}
            disabled={(profile?.party?.length || 0) >= MAX_DIGIMONS_IN_PARTY}
          >
            {getTexts('DIGIMON_CARD_ADD_TO_PARTY')}
          </Button>
        )}

        {!!isDigimonInParty && (
          <Button onClick={removeFromParty}>
            {getTexts('DIGIMON_CARD_REMOVE_FROM_PARTY')}
          </Button>
        )}

        <Button onClick={() => setDigimonDetails(digimonItem)}>
          {getTexts('DIGIMON_CARD_DETAILS')}
        </Button>
      </section>
    </div>
  )
}
