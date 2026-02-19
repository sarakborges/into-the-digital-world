import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { NpcContext } from '@/Contexts/Npc.context'
import { MapContext } from '@/Contexts/Map.context'

import { Button } from '@/Components/System/Button'

import { MapIcon } from '@/Components/App/MapIcon'

import './MapDetailsNpcs.style.scss'

export const MapDetailsNpcs = () => {
  const mapContext = useContext(MapContext)
  const npcContext = useContext(NpcContext)

  if (!mapContext || !npcContext) {
    return
  }

  const { currentMap } = mapContext
  const { setCurrentNpc } = npcContext

  const talkToNpc = (npc) => {
    setCurrentNpc(npc)
  }

  return (
    <>
      {!!currentMap && !!currentMap.availableNpcs?.length && (
        <section className="map-details-npcs">
          <main>
            {currentMap.availableNpcs.map((npcItem) => (
              <Button
                key={`map-details-${currentMap.id}-npc-${npcItem.id}`}
                onClick={() => talkToNpc(npcItem)}
              >
                {npcItem.types.map((typeItem) => (
                  <MapIcon
                    key={`map-item-${currentMap.id}-npc-${npcItem.id}-type-${typeItem}`}
                    mapType={typeItem.toString()}
                    sm
                  />
                ))}

                {getTexts('MAPS_DETAILS_NPCS_CTA').replace(
                  '[NPC-NAME]',
                  npcItem.name
                )}
              </Button>
            ))}
          </main>
        </section>
      )}
    </>
  )
}
