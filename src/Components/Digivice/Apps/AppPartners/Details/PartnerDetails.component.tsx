import { BiPencil, BiSolidStar, BiStar } from 'react-icons/bi'

import { findDigimon } from '@/GameData/Registries/Digimon.registry'
import { RenamePartner001 } from '@/GameData/Scenes/Apps/RenamePartner/001.scene'

import { togglePartnerFavorite } from '@/Helpers/Systems/Profile/togglePartnerFavorite.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Digivice/Apps/AppPartners/Details/PartnerDetails.style.scss'
import { CharacterDescription } from '@/Components/Digivice/Apps/CharacterDescription/CharacterDescription.component'
import { CharacterFullPicture } from '@/Components/Digivice/Apps/CharacterFullPicture/CharacterFullPicture.component'
import { CharacterHeader } from '@/Components/Digivice/Apps/CharacterHeader/CharacterHeader.component'
import { DigimonAttacks } from '@/Components/Digivice/Apps/DigimonAttacks/DigimonAttacks.components'
import { DigimonAttribute } from '@/Components/Digivice/Apps/DigimonAttribute/DigimonAttribute.component'
import { DigimonEquipments } from '@/Components/Digivice/Apps/DigimonEquipments/DigimonEquipments.component'
import { DigimonFamilies } from '@/Components/Digivice/Apps/DigimonFamilies/DigimonFamilies.component'
import { DigimonStats } from '@/Components/Digivice/Apps/DigimonStats/DigimonStats.component'

export const PartnerDetails = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)
  const { scene, setScene } = useSceneStore((state) => state)

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
          <Button
            disabled={!!scene}
            style="secondary"
            onClick={() => setScene({ component: RenamePartner001 })}
          >
            <BiPencil />
          </Button>

          <Button
            disabled={!!scene}
            onClick={() => togglePartnerFavorite(partner.id)}
            style={partner.isFavorite ? 'cancel' : 'secondary'}
          >
            {!partner.isFavorite && <BiSolidStar />}
            {!!partner.isFavorite && <BiStar />}
          </Button>
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
