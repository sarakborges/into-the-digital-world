import { getExtraStatsFromPartner } from '@/Helpers/Systems/Battle'
import { getBaseDigimon } from '@/Helpers/Systems/Digimon'
import { getTranslation } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/DesignSystem/Text'

import './PartyDigimonStats.style.scss'

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
      {Object.keys(baseDigimon.stats).map((stat) => (
        <section key={`profile-party-${digimonId}-stats-${stat}`}>
          <Text>
            {getTranslation('ENCYCLOPEDIA_STATS_VALUE', {
              '[NAME]': stat.toLocaleUpperCase(),
              '[VALUE]':
                baseDigimon.stats[stat] +
                getExtraStatsFromPartner(partner, stat)
            })}
          </Text>
        </section>
      ))}
    </main>
  )
}
