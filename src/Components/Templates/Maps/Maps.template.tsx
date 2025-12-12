import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { MapTypes, type MapType } from '@/Types/Map.type'

import { ALL_DIGIMONS } from '@/GameData/Digimons'
import { ALL_REGIONS } from '@/GameData/Regions'

import { MapContext } from '@/Contexts/Map.context'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'

import { MenuWrapper } from '@/Components/App/MenuWrapper'
import { MapIcon } from '@/Components/App/MapIcon'
import { MapSubtitles } from '@/Components/App/MapSubtitles'
import { MapDetails } from '@/Components/App/MapDetails'

import './Maps.style.scss'

export const MapsTemplate = () => {
  const mapContext = useContext(MapContext)

  if (!mapContext) {
    return
  }

  const { currentMap, setCurrentMap } = mapContext

  const getNewMap = (map: MapType) => {
    if (
      map.type.includes(MapTypes.COMBAT) ||
      map.type.includes(MapTypes.BOSS)
    ) {
      const digimons = [
        ...map.wildDigimons!.map((wildDigimonItem) => ({
          ...wildDigimonItem,
          baseDigimon: ALL_DIGIMONS[wildDigimonItem.baseDigimon as string]
        }))
      ]

      map = { ...map, wildDigimons: [...digimons] }
    }

    setCurrentMap({ ...map })
  }

  return (
    <MenuWrapper>
      <main className="maps-template">
        <header className="maps-header">
          <Typography as="h1">{getTexts('MAPS_TITLE')}</Typography>
          <Typography as="h2">{getTexts('MAPS_SUBTITLE')}</Typography>
        </header>

        <main className="map-regions">
          <div className="map-regions-list">
            <MapSubtitles />

            <main className="regions-list">
              {Object.keys(ALL_REGIONS).map((regionItem) => (
                <section
                  key={`region-${ALL_REGIONS[regionItem].id}`}
                  className="region-item"
                >
                  <Typography as="h2">
                    {ALL_REGIONS[regionItem].name}
                  </Typography>

                  <ul className="maps-list">
                    {ALL_REGIONS[regionItem].maps.map((mapItem) => (
                      <li
                        key={`region${ALL_REGIONS[regionItem].id}-map-${mapItem.id}`}
                        className="map-item"
                      >
                        <Button
                          onClick={() => {
                            getNewMap(mapItem)
                          }}
                          className={
                            mapItem.id === currentMap?.id ? 'active' : ''
                          }
                        >
                          <div className="map-icons">
                            {mapItem.type.map((typeItem) => (
                              <MapIcon
                                key={`region${ALL_REGIONS[regionItem].id}-map-${mapItem.id}-type-${typeItem}`}
                                mapType={typeItem}
                              />
                            ))}
                          </div>

                          <Typography as="span">{mapItem.name}</Typography>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </main>
          </div>

          <MapDetails />
        </main>
      </main>
    </MenuWrapper>
  )
}
