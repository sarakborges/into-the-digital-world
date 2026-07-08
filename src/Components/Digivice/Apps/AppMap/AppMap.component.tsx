import { AllZones } from '@/GameData/Zones'

import { getTranslation } from '@/Helpers/Language'
import { getCurrentZone } from '@/Helpers/Systems/Zones'

import { Text } from '@/Components/DesignSystem/Text'
import { Map } from '@/Components/Global/Map'

import './AppMap.style.scss'

export const AppMap = () => {
  const currentMap = getCurrentZone()

  if (!currentMap) {
    return
  }

  return (
    <div className="app-map">
      <main>
        <Map />
      </main>

      <div className="map-name">
        <Text>
          {getTranslation('MAP_NAME_FORMAT', {
            '[ZONE]': AllZones[currentMap.id].name,
            '[MAP]': currentMap.name
          })}
        </Text>
      </div>
    </div>
  )
}
