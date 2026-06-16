import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'
import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { getTexts } from '@/Helpers/Language'
import { calcExtraStats } from '@/Helpers/Systems/Battle'

import { AllDigimons } from '@/GameData/Digimons'

import { DIGIMON_STATS } from '@/Consts/Stats.const'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/System/Text'

import './DigimonStats.style.scss'

export const DigimonStats = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)

  if (!digivice?.currentDetails || !profile) {
    return
  }

  const partner = profile.partnerDigimons[
    digivice.currentDetails
  ] as PartnerDigimonType
  const baseDigimon = AllDigimons[partner.baseDigimon] as BaseDigimonType

  const getExtraStats = (stat: string) => {
    const { profile } = useProfileStore.getState()

    if (!profile) {
      return 0
    }

    const partner = profile.partnerDigimons[digivice.currentDetails!]

    return calcExtraStats({ digimon: partner, stat })
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
              <>{getExtraStats(stat)}</>
            </Text>
          </div>
        ))}
      </main>
    </section>
  )
}
