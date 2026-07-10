import { getTexts } from '@/Helpers/Language'
import { getCurrentDigimon, getPartnerDigimon } from '@/Helpers/Systems/Digimon'

import { DIGIMON_FAMILIES } from '@/Consts/Families.const'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

import './DigimonFamilies.style.scss'

export const DigimonFamilies = () => {
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
