import type {PartnerDigimonType} from '@/Types/PartnerDigimon.type'
import type {BaseDigimonType} from '@/Types/BaseDigimon.type'

import {getTexts} from '@/Helpers/Language'

import {AllDigimons} from '@/GameData/Digimons'
import {AllAttacks} from '@/GameData/Attacks'

import {useProfileStore} from '@/Stores/Profile.store'
import {useDigiviceStore} from '@/Stores/Digivice.store'

import {Text} from '@/Components/DesignSystem/Text'

import './DigimonAttacks.style.scss'

export const DigimonAttacks = () => {
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
    <section className="digimon-attacks">
      <header>
        <Text>{getTexts('ENCYCLOPEDIA_ATTACKS')}</Text>
      </header>

      <main>
        {Object.keys(baseDigimon.attacks).map((attack) => (
          <div
            className="attack"
            key={`digimon-${partner.id}-attacks-${attack}`}
          >
            <Text>
              {getTexts('ENCYCLOPEDIA_ATTACKS_DETAILS')
                .replaceAll('[NAME]', AllAttacks[attack].name)
                .replaceAll('[COOLDOWN]', AllAttacks[attack].cooldown || 0)}
            </Text>

            <Text as="p">{AllAttacks[attack].description}</Text>
          </div>
        ))}
      </main>
    </section>
  )
}
