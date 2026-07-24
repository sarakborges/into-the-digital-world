import { TbListDetails } from 'react-icons/tb'

import { getAcquaintanceGroups } from '@/Helpers/Systems/Digivice/getAcquaintanceGroups.helper'
import { updateDigivice } from '@/Helpers/Systems/Digivice/updateDigivice.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import { AppAcquaintancesDetails } from '@/Components/Digivice/Apps/AppAcquaintances/Details/AppAcquaintancesDetails.component'
import '@/Components/Digivice/Apps/AppAcquaintances/List/AppAcquaintances.style.scss'

export const AppAcquaintances = () => {
  const { profile } = useProfileStore((state) => state)
  const { scene } = useSceneStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)

  if (!profile || !digivice) {
    return
  }

  if (digivice.currentDetails) {
    return <AppAcquaintancesDetails />
  }

  const acquaintanceGroups = getAcquaintanceGroups()

  return (
    <div className="acquaintances">
      {acquaintanceGroups.map(({ category, npcs }) => (
        <div
          className="acquaintances-category"
          key={`acquaintances-${category}`}
        >
          <Text>{category}</Text>

          <div className="acquaintances-list">
            {npcs.map((npc) => (
              <div
                className="npc-item"
                key={`acquaintances-${category}-${npc.id}`}
              >
                <aside>
                  <Portrait alt={npc.name} src={`/${npc.portrait}.webp`} />
                </aside>

                <header>
                  <Text>{npc.name}</Text>
                </header>

                <footer>
                  <Button
                    onClick={() =>
                      updateDigivice({ currentDetails: npc.id })
                    }
                    variant="secondary"
                    disabled={!!scene}
                  >
                    <TbListDetails />
                  </Button>
                </footer>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
