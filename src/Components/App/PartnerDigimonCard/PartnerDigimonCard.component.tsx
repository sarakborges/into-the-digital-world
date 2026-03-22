import { useContext } from 'react'

import { ALL_DIGIMONS } from '@/GameData/Digimons'

import type { DigimonType, PartnerDigimonType } from '@/Types/Digimon.type'
import type { ItemsLootType } from '@/Types/Battle.type'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'

import { DIGIMON_LEVELS } from '@/Consts/Levels.const'
import { MAX_DIGIMONS_IN_PARTY } from '@/Consts/Battle.consts'

import { Typography } from '@/Components/System/Typography'
import { Portrait } from '@/Components/System/Portrait'
import { Button } from '@/Components/System/Button'

import { ExperienceBar } from '@/Components/App/ExperienceBar'

import './PartnerDigimonCard.style.scss'

export const PartnerDigimonCard = ({
  digimonItem
}: {
  digimonItem: PartnerDigimonType
}) => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile, setProfile } = profileContext

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

    const digimonCore = profile.cores.find(
      (coreItem) => coreItem.id === baseDigimon.id
    )

    const updatedCores: Array<ItemsLootType> = [
      ...profile.cores,
      digimonCore
        ? {
            ...digimonCore,
            quantity: digimonCore.quantity + 1
          }
        : {
            id: baseDigimon.id,
            type: 'core',
            quantity: 1
          }
    ]

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

            <Typography as="span">
              <>{getTexts('DIGIMON_CARD_LEVEL')}</>
              {digimonItem.level}
            </Typography>

            <Typography as="span">
              <>{getTexts('DIGIMON_CARD_UNSPENT_POINTS')}</>
              {digimonItem.points || 0}
            </Typography>
          </section>
        </aside>

        <ExperienceBar
          currentExp={digimonItem.experience!}
          nextLevelExp={DIGIMON_LEVELS[digimonItem.level!].expToNextLevel}
        />
      </main>

      <section className="digimon-actions">
        <Button cancel onClick={decompose}>
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

        <Button>{getTexts('DIGIMON_CARD_DETAILS')}</Button>
      </section>
    </div>
  )
}
