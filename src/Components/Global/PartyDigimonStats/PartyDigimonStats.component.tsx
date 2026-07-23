import { getTexts } from '@/Helpers/Language'
import { calcExtraStats } from '@/Helpers/Systems/Battle'
import { getBaseDigimon } from '@/Helpers/Systems/Digimon'

import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/DesignSystem/Text'
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
      {Object.keys(baseDigimon.stats).map((stat) => (
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
