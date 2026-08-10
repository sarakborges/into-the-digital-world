import { getBaseDigimonFromParty } from '@/Helpers/Systems/Profile'
import { getDigimonDisplayName } from '@/Helpers/Systems/Profile'

import { useBattleStore } from '@/Stores/Battle.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { CharacterHeader } from '@/Components/Digivice/Apps/CharacterHeader'
import { PartyDigimonStats } from '@/Components/Global/PartyDigimonStats'

import './CurrentParty.style.scss'

export const CurrentParty = () => {
  const { profile } = useProfileStore((state) => state)
  const { battle } = useBattleStore((state) => state)

  if (!profile || !!battle) {
    return
  }

  return (
    <div className="current-party">
      <div className="party-digimons">
        {profile.party.map((digimon) => {
          const baseDigimon = getBaseDigimonFromParty(digimon)

          if (!baseDigimon) {
            return null
          }

          return (
            <div key={`profile-party-${digimon}`}>
              <CharacterHeader
                character={{
                  ...baseDigimon,
                  name: getDigimonDisplayName({
                    digimonId: digimon,
                    baseDigimon
                  })
                }}
              >
                <PartyDigimonStats digimonId={digimon} />
              </CharacterHeader>
            </div>
          )
        })}
      </div>
    </div>
  )
}
