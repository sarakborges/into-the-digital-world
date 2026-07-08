import { getCurrentDigimon, getPartnerDigimon } from '@/Helpers/Systems/Digimon'
import { getTranslation } from '@/Helpers/Language'

import { AllAttacks } from '@/GameData/Attacks'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/DesignSystem/Text'

import './DigimonAttacks.style.scss'

export const DigimonAttacks = () => {
  const { digivice } = useDigiviceStore((state) => state)

  if (!digivice?.currentDetails) {
    return
  }

  const partner = getPartnerDigimon()
  const baseDigimon = getCurrentDigimon()

  if (!baseDigimon || !partner) {
    return
  }

  return (
    <section className="digimon-attacks">
      <header>
        <Text>{getTranslation('ENCYCLOPEDIA_ATTACKS')}</Text>
      </header>

      <main>
        {Object.keys(baseDigimon.attacks).map((attack) => (
          <div
            className="attack"
            key={`digimon-${partner.id}-attacks-${attack}`}
          >
            <Text>
              {getTranslation('ENCYCLOPEDIA_ATTACKS_DETAILS', {
                '[NAME]': AllAttacks[attack].name,
                '[COOLDOWN]': String(AllAttacks[attack].cooldown || 0)
              })}
            </Text>

            <Text as="p">{AllAttacks[attack].description}</Text>
          </div>
        ))}
      </main>
    </section>
  )
}
