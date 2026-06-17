import { Fragment } from 'react/jsx-runtime'
import { TbListDetails } from 'react-icons/tb'

import { AllNpcs } from '@/GameData/Npcs'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/System/Button'
import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'
import { setCurrentDetails } from '@/Helpers/Systems/Digivice'

import { AcquaintancesDetails } from '@/Components/App/AcquaintancesDetails'

import './Acquaintances.style.scss'

export const Acquaintances = () => {
  const { profile } = useProfileStore((state) => state)
  const { scene } = useSceneStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)

  if (!profile || !digivice) {
    return
  }

  if (!!digivice?.currentDetails) {
    return <AcquaintancesDetails />
  }

  return (
    <div className="acquaintances">
      {Object.keys(AllNpcs).map(
        (category) =>
          !!Object.keys(AllNpcs[category]).filter(
            (npc) =>
              AllNpcs.digimon.dorimon.id !== npc &&
              Object.keys(profile.npcAcquaintances ?? {}).includes(npc)
          ).length && (
            <Fragment key={`acquaintances-${category}`}>
              <div className="acquaintances-category">
                <Text>{category}</Text>

                <div className="acquaintances-list">
                  {Object.keys(AllNpcs[category])
                    .filter(
                      (npc) =>
                        AllNpcs.digimon.dorimon.id !== npc &&
                        Object.keys(profile.npcAcquaintances ?? {}).includes(
                          npc
                        )
                    )
                    .sort((a, b) => (a > b ? 1 : -1))
                    .map((npc) => (
                      <div
                        className="npc-item"
                        key={`acquaintances-${category}-${AllNpcs[category][npc].id}`}
                      >
                        <aside>
                          <Portrait
                            alt={AllNpcs[category][npc].name}
                            src={`/${AllNpcs[category][npc].portrait}.webp`}
                          />
                        </aside>

                        <header>
                          <Text>{AllNpcs[category][npc].name}</Text>
                        </header>

                        <footer>
                          <Button
                            onClick={() =>
                              setCurrentDetails(AllNpcs[category][npc].id)
                            }
                            disabled={!!scene}
                          >
                            <TbListDetails />
                          </Button>
                        </footer>
                      </div>
                    ))}
                </div>
              </div>
            </Fragment>
          )
      )}
      <></>
    </div>
  )
}
