import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/System/Text'

import { CharacterHeader } from '@/Components/App/CharacterHeader'
import { RenamePartner } from '@/Components/App/RenamePartner'
import { AddPartnerToFavorites } from '@/Components/App/AddPartnerToFavorites'
import { CharacterFullPicture } from '@/Components/App/CharacterFullPicture'
import { CharacterDescription } from '@/Components/App/CharacterDescription'
import { DigimonAttribute } from '@/Components/App/DigimonAttribute'
import { DigimonFamilies } from '@/Components/App/DigimonFamilies'
import { DigimonEquipments } from '@/Components/App/DigimonEquipments'
import { DigimonStats } from '@/Components/App/DigimonStats'
import { DigimonAttacks } from '@/Components/App/DigimonAttacks'

import './PartnerDetails.style.scss'

export const PartnerDetails = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)

  if (!digivice?.currentDetails || !profile) {
    return
  }

  const partner = profile.partnerDigimons[
    digivice.currentDetails
  ] as PartnerDigimonType
  const baseDigimon = AllDigimons[partner.baseDigimon] as BaseDigimonType

  return (
    <div className="partner-details">
      <header className="partner-header">
        <CharacterHeader
          character={{ ...baseDigimon, name: partner.name || baseDigimon.name }}
          lg
        >
          <>{!!partner.name && <Text>{baseDigimon.name}</Text>}</>
        </CharacterHeader>

        <div className="partner-actions">
          <RenamePartner />
          <AddPartnerToFavorites />
        </div>
      </header>

      <main>
        <CharacterFullPicture />
        <CharacterDescription />
        <DigimonAttribute />
        <DigimonFamilies />
        <DigimonEquipments />
        <DigimonStats />
        <DigimonAttacks />
      </main>
    </div>
  )
}
