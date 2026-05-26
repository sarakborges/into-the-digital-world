import { Fragment } from 'react/jsx-runtime'
import { TbListDetails } from 'react-icons/tb'

import type { NpcType } from '@/Types/Npc.type'

import { AllNpcs } from '@/GameData/Npcs'

import { useDigivice } from '@/Hooks/Digivice.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Button } from '@/Components/System/Button'
import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'

import { AcquintanceDetails } from '@/Components/App/AcquintanceDetails'

import './Acqunitances.style.scss'

export const Acquintances = () => {
  const { profile } = useProfile()
  const { scene } = useScene()
  const { digivice, setDigivice } = useDigivice()

  if (!!digivice.currentDetails) {
    return <AcquintanceDetails />
  }

  const setAcquintance = (id) => {
    setDigivice({
      ...digivice,
      currentDetails: id
    })
  }

  return (
    <div className="acquintances">
      {Object.keys(AllNpcs).map(
        (category) =>
          !!Object.keys(AllNpcs[category]).filter(
            (npc) =>
              AllNpcs.digimon.dorimon.id !== npc &&
              Object.keys(profile!.npcAcquintances!).includes(npc)
          ).length && (
            <Fragment key={`acquintances-${category}`}>
              <div className="acquintances-category">
                <Text>{category}</Text>

                <div className="acquintances-list">
                  {Object.keys(AllNpcs[category])
                    .filter(
                      (npc) =>
                        AllNpcs.digimon.dorimon.id !== npc &&
                        Object.keys(profile!.npcAcquintances!).includes(npc)
                    )
                    .sort((a, b) => (a > b ? 1 : -1))
                    .map((npc) => (
                      <div
                        className="npc-item"
                        key={`acquintances-${category}-${AllNpcs[category][npc].id}`}
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
                              setAcquintance(AllNpcs[category][npc].id)
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
