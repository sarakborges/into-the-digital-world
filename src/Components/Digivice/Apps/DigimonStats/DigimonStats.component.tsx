import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { calcExtraStats } from '@/Helpers/Systems/Battle/calcExtraStats.helper'
import { getCurrentDigimon } from '@/Helpers/Systems/Digimon/getCurrentDigimon.helper'
import { getPartnerDigimon } from '@/Helpers/Systems/Digimon/getPartnerDigimon.helper'

import { DIGIMON_STATS } from '@/Consts/Stats.const'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Digivice/Apps/DigimonStats/DigimonStats.style.scss'

export const DigimonStats = () => {
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
    <section className="digimon-stats">
      <header>
        <Text>{getTexts('ENCYCLOPEDIA_STATS')}</Text>
      </header>

      <main>
        {DIGIMON_STATS.map((stat) => (
          <div className="stat" key={`digimon-${partner.id}-stats-${stat}`}>
            <Text>{stat.toLocaleUpperCase()}</Text>

            <Text>
              <>{baseDigimon.stats[stat]}</>
              <> + </>
              <>{calcExtraStats({ digimon: partner, stat })}</>
            </Text>
          </div>
        ))}
      </main>
    </section>
  )
}
