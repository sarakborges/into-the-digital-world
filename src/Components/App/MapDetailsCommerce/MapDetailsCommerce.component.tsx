import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { MapTypes } from '@/Types/Map.type'

import { MapContext } from '@/Contexts/Map.context'

import { Typography } from '@/Components/System/Typography'

import { MapIcon } from '@/Components/App/MapIcon'

import './MapDetailsCommerce.style.scss'

export const MapDetailsCommerce = () => {
  const mapContext = useContext(MapContext)

  if (!mapContext) {
    return
  }

  const { currentMap } = mapContext

  return (
    <>
      {!!currentMap &&
        currentMap.type.includes(MapTypes.COMMERCE) &&
        !!currentMap.itemsSold?.length && (
          <section className="map-details-type">
            <header>
              <MapIcon mapType={MapTypes.COMMERCE} sm />

              <Typography as="span">
                {getTexts('MAPS_DETAILS_COMMERCE_TITLE')}
              </Typography>
            </header>

            <main>
              {currentMap.itemsSold.map((itemItem) => (
                <Typography
                  key={`map-details-${currentMap.id}-item-${itemItem.id}`}
                >
                  <>{itemItem.name}</>
                </Typography>
              ))}
            </main>
          </section>
        )}
    </>
  )
}
