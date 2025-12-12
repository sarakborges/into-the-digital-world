import { ProfileProvider } from '@/Contexts/Profile.context'
import { BattleProvider } from '@/Contexts/Battle.context'
import { MapProvider } from '@/Contexts/Map.context'

import { MapsTemplate } from '@/Components/Templates/Maps'

export const MapsRoute = () => (
  <ProfileProvider>
    <BattleProvider>
      <MapProvider>
        <MapsTemplate />
      </MapProvider>
    </BattleProvider>
  </ProfileProvider>
)
