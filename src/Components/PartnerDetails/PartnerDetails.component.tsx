import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/DesignSystem/Text'

import { CharacterHeader } from '@/Components/CharacterHeader'
import { RenamePartner } from '@/Components/RenamePartner'
import { AddPartnerToFavorites } from '@/Components/AddPartnerToFavorites'
import { CharacterFullPicture } from '@/Components/CharacterFullPicture'
import { CharacterDescription } from '@/Components/CharacterDescription'
import { DigimonAttribute } from '@/Components/DigimonAttribute'
import { DigimonFamilies } from '@/Components/DigimonFamilies'
import { DigimonEquipments } from '@/Components/DigimonEquipments'
import { DigimonStats } from '@/Components/DigimonStats'
import { DigimonAttacks } from '@/Components/DigimonAttacks'

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
