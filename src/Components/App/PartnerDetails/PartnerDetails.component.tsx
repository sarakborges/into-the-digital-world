import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'

import { useProfile } from '@/Hooks/Profile.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'

import { Text } from '@/Components/System/Text'
import { getTexts } from '@/Helpers/getTexts.helper'
import { Portrait } from '@/Components/System/Portrait'

import { CharacterHeader } from '@/Components/App/CharacterHeader'

import './PartnerDetails.style.scss'

export const PartnerDetails = () => {
  const { profile } = useProfile()
  const { digivice } = useDigivice()

  if (!digivice.currentDetails) {
    return
  }

  const partner = profile!.partnerDigimons[
    digivice.currentDetails
  ] as PartnerDigimonType
  const baseDigimon = AllDigimons[partner.baseDigimon] as BaseDigimonType

  return (
    <div className="partner-details">
      <div className="partner-header">
        <CharacterHeader
          character={{ ...baseDigimon, name: partner.name || baseDigimon.name }}
          lg
        >
          <>{!!partner.name && <Text>{baseDigimon.name}</Text>}</>
        </CharacterHeader>
      </div>

      <div className="partner-picture">
        <Text>{getTexts('ENCYCLOPEDIA_FULL_PICTURE')}</Text>

        <Portrait
          alt={baseDigimon.name}
          src={`/${baseDigimon.fullImage}.webp`}
        />
      </div>
    </div>
  )
}
