import { getBaseDigimonFromParty } from '@/Helpers/Systems/Profile'
import { getDigimonDisplayName } from '@/Helpers/Systems/Profile'

import { useBattleStore } from '@/Stores/Battle.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'
import '@/Components/Global/CurrentParty/CurrentParty.style.scss'
import { PartnerBond } from '@/Components/Global/PartnerBond'
import { PartyDigimonStats } from '@/Components/Global/PartyDigimonStats'

export const CurrentParty = () => {
  const { profile } = useProfileStore((state) => state)
  const { battle } = useBattleStore((state) => state)

  if (!profile || !!battle) {
    return
  }

  return (
    <div className="screen-footer">
      <div className="current-party">
        <div className="party-digimons">
          {profile.party.map((digimon) => {
            const baseDigimon = getBaseDigimonFromParty({
              digimonId: digimon,
              partnerDigimons: profile.partnerDigimons
            })

            if (!baseDigimon) {
              return null
            }

            return (
              <div key={`profile-party-${digimon}`}>
                <main>
                  <aside>
                    <Portrait
                      alt={baseDigimon.name}
                      src={`/${baseDigimon.portrait}.webp`}
                    />
                  </aside>

                  <main>
                    <PartyDigimonStats digimonId={digimon} />

                    <footer>
                      <PartnerBond />
                    </footer>
                  </main>
                </main>

                <footer>
                  <Text>
                    {getDigimonDisplayName({
                      digimonId: digimon,
                      partnerDigimons: profile.partnerDigimons,
                      baseDigimon
                    })}
                  </Text>
                </footer>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
