import { AiOutlineSelect } from 'react-icons/ai'

import { AllZones } from '@/GameData/Zones'

import { openMap } from '@/Helpers/Systems/Digivice'
import { getTranslation } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'

import { Map } from '@/Components/Global/Map'

import './Minimap.style.scss'

export const Minimap = () => {
  const { profile } = useProfileStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  if (!profile?.currentZone || !!battle || !!scene) {
    return
  }

  return (
    <div className="minimap">
      <main>
        <Map />

        <Button style="secondary" onClick={openMap}>
          <AiOutlineSelect />
        </Button>

        <div className="zone-name">
          <Text>
            {getTranslation('CURRENT_ZONE', {
              '[ZONE]': AllZones[profile.currentZone.id].name
            })}
          </Text>
        </div>
      </main>
    </div>
  )
}
