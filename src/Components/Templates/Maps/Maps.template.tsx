import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { MapTypes, type MapType } from '@/Types/Map.type'

import { ALL_DIGIMONS } from '@/GameData/Digimons'
import { ALL_REGIONS } from '@/GameData/Regions'

import { NpcContext } from '@/Contexts/Npc.context'
import { MapContext } from '@/Contexts/Map.context'
import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'

import { MenuWrapper } from '@/Components/App/MenuWrapper'
import { MapIcon } from '@/Components/App/MapIcon'
import { MapSubtitles } from '@/Components/App/MapSubtitles'
import { MapDetails } from '@/Components/App/MapDetails'
import { NpcDialog } from '@/Components/App/NpcDialog'

import './Maps.style.scss'

export const MapsTemplate = () => {
  const mapContext = useContext(MapContext)
  const npcContext = useContext(NpcContext)
  const profileContext = useContext(ProfileContext)

  if (!mapContext || !npcContext || !profileContext) {
    return
  }

  const { currentNpc } = npcContext
  const { currentMap, setCurrentMap } = mapContext
  const { profile } = profileContext

  const getNewMap = (map: MapType) => {
    if (
      map.types.includes(MapTypes.COMBAT) ||
      map.types.includes(MapTypes.BOSS)
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
    <>
      {!!currentNpc && <NpcDialog />}

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
                {Object.values(ALL_REGIONS)
                  .filter(
                    (regionItem) =>
                      !regionItem.questRequired ||
                      profile.completedQuests?.includes(
                        regionItem.questRequired
                      )
                  )
                  .map((regionItem) => (
                    <section
                      key={`region-${regionItem.id}`}
                      className="region-item"
                    >
                      <Typography as="h2">{regionItem.name}</Typography>

                      <ul className="maps-list">
                        {regionItem.maps.map((mapItem) => (
                          <li
                            key={`region${regionItem.id}-map-${mapItem.id}`}
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
                                {mapItem.types.map((typeItem) => (
                                  <MapIcon
                                    key={`region${regionItem.id}-map-${mapItem.id}-type-${typeItem}`}
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
    </>
  )
}
