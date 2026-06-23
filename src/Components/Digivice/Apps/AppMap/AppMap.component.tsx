import type { ZoneType } from '@/Types/Zone.type'

import { AllZones } from '@/GameData/Zones'

import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/DesignSystem/Text'

import { Map } from '@/Components/Global/Map'

import './AppMap.style.scss'

export const AppMap = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile?.currentZone) {
    return
  }

  const currentZone: ZoneType = AllZones[profile.currentZone.id]

  return (
    <div className="app-map">
      <main>
        <Map />
      </main>

      <div className="map-name">
        <Text>{currentZone.name}</Text>
      </div>
    </div>
  )
}
