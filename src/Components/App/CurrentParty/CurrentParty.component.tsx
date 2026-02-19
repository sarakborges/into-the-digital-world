import { useContext } from 'react'

import { ProfileContext } from '@/Contexts/Profile.context'

import { PartnerDigimonCard } from '@/Components/App/PartnerDigimonCard'

import './CurrentParty.style.scss'

export const CurrentParty = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile } = profileContext

  const party = profile.party?.map((partyItem) =>
    profile.partners?.find((partnerItem) => partnerItem.id === partyItem)
  )

  return (
    <main className="current-party">
      {party?.map((partyItem) => (
        <PartnerDigimonCard
          key={`partner-list-item-${partyItem?.id}`}
          digimonItem={partyItem!}
        />
      ))}
    </main>
  )
}
