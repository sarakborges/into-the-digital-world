import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'

import { useBattleStore } from '@/Stores/Battle.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'
import { PartnerBond } from '@/Components/Global/PartnerBond'
import { PartyDigimonStats } from '@/Components/Global/PartyDigimonStats'

import './CurrentParty.style.scss'

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
            const baseDigimon = profile.partnerDigimons[digimon]
              ? (AllDigimons[
                  profile.partnerDigimons[digimon].baseDigimon
                ] as BaseDigimonType)
              : undefined

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
                    {profile.partnerDigimons[digimon].name || baseDigimon.name}
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
