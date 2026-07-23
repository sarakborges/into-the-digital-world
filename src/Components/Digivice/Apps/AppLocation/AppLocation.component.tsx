import { getZoneDefinition } from '@/GameData/Registries/ZoneManifest.registry'

import { getTexts } from '@/Helpers/Language'
import { getAvailableWarpLocations } from '@/Helpers/Systems/Digivice'
import { closeScene } from '@/Helpers/Systems/Scenes'
import { warpTo } from '@/Helpers/Systems/Zones'

import { WARP_LOCATIONS } from '@/Consts/Locations.const'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'
import '@/Components/Digivice/Apps/AppLocation/AppLocation.style.scss'

export const AppLocation = () => {
  const { profile } = useProfileStore((state) => state)
  const { setDigivice } = useDigiviceStore((state) => state)

  if (!profile) {
    return
  }

  const warp = (location) => {
    warpTo(WARP_LOCATIONS[location])

    setDigivice({
      isOpen: false,
      currentApp: undefined,
      currentDetails: undefined
    })

    closeScene()
  }

  const availableWarpLocations = getAvailableWarpLocations()

  return (
    <div className="locations">
      <Text>{getTexts('LOCATION_SELECT')}</Text>

      <div className="locations-list">
        {availableWarpLocations.map((location) => (
          <Button onClick={() => warp(location)} key={`warp-to-${location}`}>
            <Portrait
              src={`/zones/Locations/${location}.webp`}
              alt={getZoneDefinition(location).name}
            />

            <Text>{getZoneDefinition(location).name}</Text>
          </Button>
        ))}
      </div>
    </div>
  )
}
