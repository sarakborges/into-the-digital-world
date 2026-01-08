import { ProfileProvider } from '@/Contexts/Profile.context'
import { BattleProvider } from '@/Contexts/Battle.context'
import { MapProvider } from '@/Contexts/Map.context'
import { NpcProvider } from '@/Contexts/Npc.context'

import { MapsTemplate } from '@/Components/Templates/Maps'

export const MapsRoute = () => (
  <ProfileProvider>
    <BattleProvider>
      <MapProvider>
        <NpcProvider>
          <MapsTemplate />
        </NpcProvider>
      </MapProvider>
    </BattleProvider>
  </ProfileProvider>
)
