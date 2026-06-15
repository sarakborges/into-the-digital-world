import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'
import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { DIGIMON_FAMILIES } from '@/Consts/Families.const'

import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import './DigimonFamilies.style.scss'

export const DigimonFamilies = () => {
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
    <section className="digimon-families">
      <header>
        <Text>{getTexts('ENCYCLOPEDIA_FAMILIES')}</Text>
      </header>

      <main className="families">
        {Object.keys(baseDigimon.families).map((family) => (
          <div key={`digimon-${partner.id}-families-${family}`}>
            <Portrait
              alt={DIGIMON_FAMILIES[family].name}
              src={`/families/${family}.webp`}
            />

            <Text>{DIGIMON_FAMILIES[family].name}</Text>
          </div>
        ))}
      </main>
    </section>
  )
}
