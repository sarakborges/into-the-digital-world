import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { MapContext } from '@/Contexts/Map.context'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'

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
          <header>
            <Typography as="h2">
              {getTexts('MAPS_DETAILS_NPCS_TITLE')}
            </Typography>
          </header>

          <main>
            {currentMap.availableNpcs.map((npcItem) => (
              <Button key={`map-details-${currentMap.id}-npc-${npcItem.id}`}>
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
