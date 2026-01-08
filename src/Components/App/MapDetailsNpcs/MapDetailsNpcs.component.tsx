import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { MapContext } from '@/Contexts/Map.context'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'

import { MapIcon } from '@/Components/App/MapIcon'

import './MapDetailsNpcs.style.scss'

export const MapDetailsNpcs = () => {
  const mapContext = useContext(MapContext)

  if (!mapContext) {
    return
  }

  const { currentMap } = mapContext

  return (
    <>
      {!!currentMap && !!currentMap.availableNpcs?.length && (
        <section className="map-details-npcs">
          <main>
            {currentMap.availableNpcs.map((npcItem) => (
              <Button key={`map-details-${currentMap.id}-npc-${npcItem.id}`}>
                {npcItem.types.map((typeItem) => (
                  <MapIcon
                    key={`map-item-${currentMap.id}-npc-${npcItem.id}-type-${typeItem}`}
                    mapType={typeItem.toString()}
                    sm
                  />
                ))}

                {getTexts('MAPS_DETAILS_NPCS_CTA').replace(
                  ':npc-name',
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
