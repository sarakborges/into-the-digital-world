import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { MapTypes } from '@/Types/Map.type'

import { MapContext } from '@/Contexts/Map.context'

import { Typography } from '@/Components/System/Typography'

import { MapIcon } from '@/Components/App/MapIcon'

import './MapDetailsQuest.style.scss'

export const MapDetailsQuest = () => {
  const mapContext = useContext(MapContext)

  if (!mapContext) {
    return
  }

  const { currentMap } = mapContext

  return (
    <>
      {!!currentMap &&
        currentMap.type.includes(MapTypes.QUEST) &&
        !!currentMap.questsOffered?.length && (
          <section className="map-details-type">
            <header>
              <MapIcon mapType={MapTypes.QUEST} sm />

              <Typography as="span">
                {getTexts('MAPS_DETAILS_QUEST_TITLE')}
              </Typography>
            </header>

            <main>
              {currentMap.questsOffered.map((questItem) => (
                <Typography
                  key={`map-details-${currentMap.id}-quest-${questItem.id}`}
                >
                  <>“{questItem.name}”</>
                </Typography>
              ))}
            </main>
          </section>
        )}
    </>
  )
}
