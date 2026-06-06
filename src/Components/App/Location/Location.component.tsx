import { AllZones } from '@/GameData/Zones'

import { warpTo } from '@/Helpers/warpTo.helper'

import { WARP_LOCATIONS } from '@/Consts/Locations.const'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/System/Button'
import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'

import './Location.style.scss'

export const Location = () => {
  const { profile } = useProfileStore((state) => state)
  const { setDigivice } = useDigiviceStore((state) => state)

  const warp = (location) => {
    warpTo(WARP_LOCATIONS[location])

    setDigivice({
      isOpen: false,
      currentApp: undefined,
      currentDetails: undefined
    })
  }

  return (
    <div className="locations">
      <Text>Select destination:</Text>

      <div className="locations-list">
        {Object.keys(WARP_LOCATIONS).map((location) => (
          <Button
            onClick={() => warp(location)}
            key={`warp-to-${location}`}
            disabled={profile?.currentZone.id === location}
          >
            <Portrait
              src={`/zones/${WARP_LOCATIONS[location].background}.webp`}
              alt={AllZones[location].name}
            />

            <Text>{AllZones[location].name}</Text>
          </Button>
        ))}
      </div>
    </div>
  )
}
