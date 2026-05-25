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

  const acquintances: {
    [acquintanceCategory: string]: Array<NpcType>
  } = {
    general: [],
    digimon: [],
    appmon: []
  }

  for (let acquintance of Object.keys(profile?.npcAcquintances!)) {
    if (acquintance === AllNpcs.dorimon.id) {
      continue
    }

    const npc = AllNpcs[acquintance]

    acquintances[npc.category].push(npc)
  }

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
      {Object.keys(acquintances).map((category) => (
        <Fragment key={`acquintances-${category}`}>
          {!!acquintances[category].length && (
            <div className="acquintances-category">
              <Text>{category}</Text>

              <div className="acquintances-list">
                {acquintances[category]
                  .sort((a, b) => (a.id > b.id ? 1 : -1))
                  .map((npc) => (
                    <div
                      className="npc-item"
                      key={`acquintances-${category}-${npc.id}`}
                    >
                      <aside>
                        <Portrait
                          alt={npc.name}
                          src={`/${npc.portrait}.webp`}
                        />
                      </aside>

                      <header>
                        <Text>{npc.name}</Text>
                      </header>

                      <footer>
                        <Button
                          onClick={() => setAcquintance(npc.id)}
                          disabled={!!scene}
                        >
                          <TbListDetails />
                        </Button>
                      </footer>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </Fragment>
      ))}
      <></>
    </div>
  )
}
