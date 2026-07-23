import { findDigimon } from '@/GameData/Registries/Digimon.registry'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/DesignSystem/Text'
import { AddPartnerToFavorites } from '@/Components/Digivice/Apps/AddPartnerToFavorites'
import '@/Components/Digivice/Apps/AppPartners/Details/PartnerDetails.style.scss'
import { CharacterDescription } from '@/Components/Digivice/Apps/CharacterDescription'
import { CharacterFullPicture } from '@/Components/Digivice/Apps/CharacterFullPicture'
import { CharacterHeader } from '@/Components/Digivice/Apps/CharacterHeader'
import { DigimonAttacks } from '@/Components/Digivice/Apps/DigimonAttacks'
import { DigimonAttribute } from '@/Components/Digivice/Apps/DigimonAttribute'
import { DigimonEquipments } from '@/Components/Digivice/Apps/DigimonEquipments'
import { DigimonFamilies } from '@/Components/Digivice/Apps/DigimonFamilies'
import { DigimonStats } from '@/Components/Digivice/Apps/DigimonStats'
import { RenamePartner } from '@/Components/Digivice/Apps/RenamePartner'

export const PartnerDetails = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)

  if (!digivice?.currentDetails || !profile) {
    return
  }

  const partner = profile.partnerDigimons[digivice.currentDetails]
  const baseDigimon = partner ? findDigimon(partner.baseDigimon) : undefined

  if (!partner || !baseDigimon) {
    return
  }

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
