import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'
import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { getTexts } from '@/Helpers/Language'

import { DIGIMON_ATTRIBUTES } from '@/Consts/Attributes.const'

import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import './DigimonAttribute.style.scss'

export const DigimonAttribute = () => {
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
    <section className="digimon-attribute">
      <header>
        <Text>{getTexts('ENCYCLOPEDIA_ATTRIBUTE')}</Text>
      </header>

      <main className="attribute">
        <div>
          <Portrait
            alt={DIGIMON_ATTRIBUTES[baseDigimon.attribute].name}
            src={`/attributes/${baseDigimon.attribute}.webp`}
          />

          <Text>{DIGIMON_ATTRIBUTES[baseDigimon.attribute].name}</Text>
        </div>
      </main>
    </section>
  )
}
