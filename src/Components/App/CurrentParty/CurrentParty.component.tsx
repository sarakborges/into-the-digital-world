import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import './CurrentParty.style.scss'

export const CurrentParty = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  return (
    <div className="current-party">
      <div className="party-digimons">
        {profile.party.map((digimon) => (
          <div key={`profile-party-${digimon}`}>
            <Text>
              {profile.partnerDigimons[digimon].name ||
                AllDigimons[profile.partnerDigimons[digimon].baseDigimon].name}
            </Text>

            <Portrait
              alt={
                AllDigimons[profile.partnerDigimons[digimon].baseDigimon].name
              }
              src={`/${
                AllDigimons[profile.partnerDigimons[digimon].baseDigimon]
                  .portrait
              }.webp`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
