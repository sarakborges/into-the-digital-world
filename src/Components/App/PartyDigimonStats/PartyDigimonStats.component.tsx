import { AllDigimons } from '@/GameData/Digimons'

import { calcExtraStats } from '@/Helpers/Systems/Battle'
import { getTexts } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'

import './PartyDigimonStats.style.scss'

export const PartyDigimonStats = ({ digimonId }: { digimonId: number }) => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const baseDigimon =
    AllDigimons[profile.partnerDigimons[digimonId].baseDigimon]

  return (
    <main className="party-digimon-stats">
      {Object.keys(baseDigimon.stats).map((stat) => (
        <section key={`profile-party-${digimonId}-stats-${stat}`}>
          <Text>
            {getTexts('ENCYCLOPEDIA_STATS_VALUE')
              .replaceAll('[NAME]', stat.toLocaleUpperCase())
              .replaceAll(
                '[VALUE]',
                baseDigimon.stats[stat] +
                  calcExtraStats({
                    digimon: profile.partnerDigimons[digimonId],
                    stat
                  })
              )}
          </Text>
        </section>
      ))}
    </main>
  )
}
