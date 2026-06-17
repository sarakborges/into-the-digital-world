import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'

import { getTexts } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/DesignSystem/Text'

import './CharacterDescription.style.scss'

export const CharacterDescription = () => {
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
    <section className="character-description">
      <header>
        <Text>{getTexts('ENCYCLOPEDIA_DESCRIPTION')}</Text>
      </header>

      <main>
        <Text as="p">{baseDigimon.description}</Text>
      </main>
    </section>
  )
}
