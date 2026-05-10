import { Fragment } from 'react/jsx-runtime'

import type { NpcType } from '@/Types/Npc.type'

import { AllNpcs } from '@/GameData/Npcs'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Button } from '@/Components/System/Button'
import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'

import './Acqunitances.style.scss'

export const Acquintances = () => {
  const { profile } = useProfile()
  const { scene } = useScene()

  const acquintances: {
    [k: string]: Array<NpcType>
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
                    <Button
                      key={`acquintances-${category}-${npc.id}`}
                      disabled={!!scene}
                    >
                      <Portrait alt={npc.name} src={`/${npc.portrait}.webp`} />

                      <Text>{npc.name}</Text>
                    </Button>
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
