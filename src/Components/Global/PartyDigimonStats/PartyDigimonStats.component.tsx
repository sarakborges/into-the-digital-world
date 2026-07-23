import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { calcExtraStats } from '@/Helpers/Systems/Battle/calcExtraStats.helper'
import { getBaseDigimon } from '@/Helpers/Systems/Digimon/getBaseDigimon.helper'

import { DIGIMON_STATS } from '@/Consts/Stats.const'

import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Global/PartyDigimonStats/PartyDigimonStats.style.scss'

export const PartyDigimonStats = ({ digimonId }: { digimonId: number }) => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const baseDigimon = getBaseDigimon(digimonId)
  const partner = profile.partnerDigimons[digimonId]

  if (!baseDigimon || !partner) {
    return
  }

  return (
    <main className="party-digimon-stats">
      {DIGIMON_STATS.map((stat) => (
        <section key={`profile-party-${digimonId}-stats-${stat}`}>
          <Text>
            {getTexts('ENCYCLOPEDIA_STATS_VALUE', {
              '[NAME]': stat.toLocaleUpperCase(),
              '[VALUE]':
                baseDigimon.stats[stat] +
                calcExtraStats({ digimon: partner, stat })
            })}
          </Text>
        </section>
      ))}
    </main>
  )
}
