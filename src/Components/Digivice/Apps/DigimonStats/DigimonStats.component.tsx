import { getTexts } from '@/Helpers/Language'
import { getExtraStatsFromPartner } from '@/Helpers/Systems/Battle'
import { getCurrentDigimon, getPartnerDigimon } from '@/Helpers/Systems/Digimon'

import { DIGIMON_STATS } from '@/Consts/Stats.const'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/DesignSystem/Text'

import './DigimonStats.style.scss'

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
              <>{getExtraStatsFromPartner(partner, stat)}</>
            </Text>
          </div>
        ))}
      </main>
    </section>
  )
}
