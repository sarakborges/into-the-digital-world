import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'

import { getTexts } from '@/Helpers/Language'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

import './CharacterFullPicture.style.scss'

export const CharacterFullPicture = () => {
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
    <section className="character-full-picture">
      <header>
        <Text>{getTexts('ENCYCLOPEDIA_FULL_PICTURE')}</Text>
      </header>

      <main>
        <Portrait
          alt={baseDigimon.name}
          src={`/${baseDigimon.fullImage}.webp`}
        />
      </main>
    </section>
  )
}
