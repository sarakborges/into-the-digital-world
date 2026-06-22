

import {AllZones} from '@/GameData/Zones'

import {getTexts} from '@/Helpers/Language'

import {useProfileStore} from '@/Stores/Profile.store'
import {useBattleStore} from '@/Stores/Battle.store'

import {Text} from '@/Components/DesignSystem/Text'

import {Map} from '@/Components/Global/Map'

import './Minimap.style.scss'

export const Minimap = () => {
  const { profile } = useProfileStore((state) => state)
  const { battle } = useBattleStore((state) => state)

  if (!profile?.currentZone || !!battle) {
    return
  }

  return (
    <div className="minimap">
      <main>
        <Map />

        <div className="zone-name">
          <Text>
            {getTexts('CURRENT_ZONE').replaceAll(
              '[ZONE]',
              AllZones[profile.currentZone.id].name
            )}
          </Text>
        </div>
      </main>
    </div>
  )
}
