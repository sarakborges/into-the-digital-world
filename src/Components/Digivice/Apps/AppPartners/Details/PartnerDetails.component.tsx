import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'
import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/DesignSystem/Text'

import { AddPartnerToFavorites } from '@/Components/Digivice/Apps/AddPartnerToFavorites'
import { CharacterFullPicture } from '@/Components/Digivice/Apps/CharacterFullPicture'
import { CharacterDescription } from '@/Components/Digivice/Apps/CharacterDescription'
import { DigimonEquipments } from '@/Components/Digivice/Apps/DigimonEquipments'
import { DigimonAttribute } from '@/Components/Digivice/Apps/DigimonAttribute'
import { DigimonFamilies } from '@/Components/Digivice/Apps/DigimonFamilies'
import { CharacterHeader } from '@/Components/Digivice/Apps/CharacterHeader'
import { DigimonAttacks } from '@/Components/Digivice/Apps/DigimonAttacks'
import { RenamePartner } from '@/Components/Digivice/Apps/RenamePartner'
import { DigimonStats } from '@/Components/Digivice/Apps/DigimonStats'

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
