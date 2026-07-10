import { getTranslation } from '@/Helpers/Language'
import { getCurrentMap, getCurrentZone } from '@/Helpers/Systems/Zones'

import { Text } from '@/Components/DesignSystem/Text'
import { Map } from '@/Components/Global/Map'

import './AppMap.style.scss'

export const AppMap = () => {
  const currentZone = getCurrentZone()
  const currentMap = getCurrentMap()

  if (!currentMap || !currentZone) {
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
            '[ZONE]': currentZone.name,
            '[MAP]': currentMap.name
          })}
        </Text>
      </div>
    </div>
  )
}
