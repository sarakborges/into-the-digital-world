import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/DesignSystem/Text'
import { Portrait } from '@/DesignSystem/Portrait'

import { PartyDigimonStats } from '@/Components/PartyDigimonStats'
import { PartnerBond } from '@/Components/PartnerBond'

import './CurrentParty.style.scss'

export const CurrentParty = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  return (
    <div className="current-party">
      <div className="party-digimons">
        {profile.party.map((digimon) => {
          const baseDigimon =
            AllDigimons[profile.partnerDigimons[digimon].baseDigimon]

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
  )
}
